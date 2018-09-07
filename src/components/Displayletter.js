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
      <div style={{ minHeight: "200px" }} className="words-box">
        {items.map(word => (
          <div className="split-words" key={word.id}>
            {images[word.image] ? (
              <ButtonLink className="wordImage" onPress={play(audios[word.sound])}>
                <img src={images[word.image]} alt={word.description} />
              </ButtonLink>
            ) : (
              <div className="spinner wordImage" />
            )}
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
    this.go = this.go.bind(this)
    this.getLetterIndex = this.getLetterIndex.bind(this)
  }

  getLetterIndex() {
    const { letters, letter } = this.props
    return letters.findIndex(item => item.id === letter.id)
  }
  go(direction) {
    const { renderLetter, letters } = this.props
    const index = this.getLetterIndex()
    const nextIndex =
      direction === "next"
        ? index === letters.length - 1
          ? 0
          : index + 1
        : index === 0
          ? letters.length - 1
          : index - 1
    const nextLetter = letters[nextIndex]
    return () => {
      this.props.router.push(`/letters/${nextLetter.capital}`)
      renderLetter(nextLetter)
    }
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
                <ButtonLink onPress={this.go("previous")}>
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
                <ButtonLink onPress={this.go("next")}>
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

export default connect(
  ({ letters }, { routeParams }) => ({
    letters,
    letter:
      routeParams.id &&
      letters.find(letter => letter.capital.toUpperCase() === routeParams.id.toUpperCase()),
  }),
  dispatch => ({
    renderLetter: letter => dispatch({ type: "RENDER_LETTER", payload: letter }),
  }),
)(DisplayLetter)
