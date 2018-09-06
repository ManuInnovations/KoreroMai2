import React, { Component } from "react"

const oneImage = url =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(url)
    img.onerror = () => reject(url)
    img.src = url
  })

const oneAudio = url =>
  new Promise((resolve, reject) => {
    const audio = new Audio()
    audio.addEventListener("canplaythrough", () => resolve(audio), false)
    audio.addEventListener("error", () => reject(audio))
    audio.src = url
    audio.load()
  })

const image = url => (Array.isArray(url) ? Promise.all(url.map(oneImage)) : oneImage(url))

const audio = url => (Array.isArray(url) ? Promise.all(url.map(oneAudio)) : oneAudio(url))

class Preloader extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount() {
    this.load(this.props)
  }

  load({ images, audios }) {
    Promise.all([
      images ? image(images) : Promise.resolve(),
      audios ? audio(audios) : Promise.resolve(),
    ]).then(([resultImages, resultAudios]) =>
      this.setState({
        loading: false,
        images: resultImages.reduce(
          (result, url, index) => ({ ...result, [url]: resultImages[index] }),
          {},
        ),
        audios: audios.reduce(
          (result, url, index) => ({ ...result, [url]: resultAudios[index] }),
          {},
        ),
      }),
    )
  }

  render() {
    const { children } = this.props
    const { loading, images, audios } = this.state
    return <div>{loading ? <div className="loader" /> : children({ images, audios })}</div>
  }
}

export default Preloader
