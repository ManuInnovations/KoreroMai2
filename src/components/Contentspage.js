import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const debug = require("debug")("components:Contentspage")

class Contentspage extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }
  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    return (
      <div className="container">
        <Header />
        <div className="content-box">
          <h2>Tātai reta Māori</h2>
          <hr />
          <h3>Choose a letter to hear sounds and words</h3>
          <div className="button-container">
            {letters.map(letter => (
              <Link key={letter.id} to={`/letters/${letter.capital}`}>
                <button
                  type="button"
                  className="contents-btn"
                  onClick={() =>
                    dispatch({
                      type: "RENDER_LETTER",
                      payload: letter,
                    })
                  }
                >
                  {letter.capital}
                </button>
              </Link>
            ))}
          </div>
          <br />
          <img src="./images/words/hoiho.svg" alt="horse" className="hmImage" />
          <img src="./images/words/manu.svg" alt="bird" className="hmImage" />
          <img src="./images/words/ngata.svg" alt="snail" className="hmImage" />
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(Contentspage)
