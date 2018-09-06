import React from "react"

class Audio extends React.PureComponent {
  constructor(props) {
    super(props)
    this.audio = document.createElement("audio")
    this.audio.setAttribute("preload", true)
    this.audio.src = props.src
    this.play.bind(this)
  }

  play() {
    this.audio.play()
  }
  render() {
    return null
  }
}

export default Audio
