const debug = require("debug")("components:Medialibrary")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class Medialibrary extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props

    return (
      <div className="row">
        <h1>Media Library</h1>
          {
            letters.map((letter) => {
              return (
                <div className="col-sm-3 preview">
                  <Link key={letter.id} to={`/media/${letter.capital}`}>
                    <figure>
                      <img
                        src={`${letter.wordImage[0].image}`}
                        className="img-fluid"
                        onClick={() =>
                          dispatch({
                            type: "RENDER_LETTER",
                              payload: letter,
                            })
                        } />
                    </figure>
                  </Link>
                </div>
              )
            })
          }
      </div>
    )
  }
}

module.exports = connect(state => state)(Medialibrary)
