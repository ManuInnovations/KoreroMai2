const debug = require("debug")("components:letters")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class letters extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props

    return (
      <div className="row">
        <div className="col-sm-12">
          {
          letters.map((letter) => {
            return (

              <Link
                key={letter.id}
                to={`/letters/${letter.capital}`}
              >
                <div
                  className="btn-group btn-group-lg btn-group-center wiggle-me"
                  role="group"
                  aria-label="..."
                >

                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                        dispatch({
                          type: "RENDER_LETTER",
                          payload: { letter },
                        })
                    }
                  >
                    {letter.capital}
                  </button>
                </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(letters)
