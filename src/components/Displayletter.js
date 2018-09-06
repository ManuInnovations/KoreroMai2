import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import Preloader from "./Preloader"
import ButtonLink from "./ButtonLink"

const debug = require("debug")("components:Displayletter")

const IMAGES = {
  click: "/images/click.svg",
  listen: "/images/listen.svg",
  next: "/images/next.png",
  previous: "/images/previous.png",
  play: "/images/play.png",
}

const play = sound => () => {
  sound.play()
}

const Words = ({ items = [] }) => (
  <Preloader images={items.map(({ image }) => image)} audios={items.map(({ sound }) => sound)}>
    {({ images, audios }) => (
      <div className="words-box">
        {items.map(word => (
          <div className="split-words" key={word.id}>
            <ButtonLink className="wordImage" onPress={play(audios[word.sound])}>
              <img src={images[word.image]} alt={word.description} />
            </ButtonLink>
            <p className="wordDescription">{word.description}</p>
          </div>
        ))}
      </div>
    )}
  </Preloader>
)

class DisplayLetter extends React.Component {
  constructor() {
    super()
    this.nextButton = this.nextButton.bind(this)
    this.previousButton = this.previousButton.bind(this)
  }
  nextButton() {
    const { dispatch, letters, letter } = this.props
    const id = letters.findIndex(item => item.id === letter.id)
    const nextLetter = id === letters.length - 1 ? letters[0] : letters[id + 1]
    this.props.router.push(`/letters/${nextLetter.capital}`)
    dispatch({ type: "RENDER_LETTER", payload: nextLetter })
  }
  previousButton() {
    const { dispatch, letters, letter } = this.props
    const id = letters.findIndex(item => item.id === letter.id)
    const nextLetter = id === 0 ? letters[letters.length - 1] : letters[id - 1]
    this.props.router.push(`/letters/${nextLetter.capital}`)
    dispatch({ type: "RENDER_LETTER", payload: nextLetter })
  }

  render() {
    debug(this.props)
    const { letter } = this.props
    return (
      <div className="container">
        <Header />
        <Preloader
          images={[IMAGES.click, IMAGES.listen, IMAGES.previous, IMAGES.next, IMAGES.play]}
          audios={[letter.capitalSound, letter.lowerSound]}
        >
          {({ images, audios }) => (
            <div className="letter-box">
              <div className="letters">
                <ButtonLink onPress={this.previousButton}>
                  <img id="previous-letter" src={images[IMAGES.previous]} alt="back button" />
                </ButtonLink>
                <p>Click on the letters and pictures</p>
                <img src={images[IMAGES.click]} alt="click" width="30px" id="click-icon" />
                <img src={images[IMAGES.listen]} alt="listen" width="30px" id="listen-icon" />
                <ButtonLink className="letter-button" onPress={play(audios[letter.capitalSound])}>
                  {letter.capital}
                </ButtonLink>
                <ButtonLink className="letter-button" onPress={play(audios[letter.lowerSound])}>
                  {letter.lowercase}
                </ButtonLink>
                <ButtonLink onPress={this.nextButton}>
                  <img id="next-letter" src={images[IMAGES.next]} alt="next button" />
                </ButtonLink>
              </div>
              <div className="word-container">
                <Words items={letter.wordImage} />
                <Link key={letter.id} to={`/media/${letter.capital}`}>
                  <img src={images[IMAGES.play]} alt="play" id="media-play" />
                </Link>
              </div>
            </div>
          )}
        </Preloader>
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(DisplayLetter)
