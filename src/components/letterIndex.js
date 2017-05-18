const debug = require("debug")("components:letterIndex")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class letterIndex extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    console.log("children,", this.props.children);

    return (
      <div className="container">
        <div className="row col-sm-12">
        <Link
          to="/letterIndex"
        >
          <img
            id="back"
            src="../../images/back.gif"
            alt="back button"
          />
        </Link>

          {
          letters.map((letter) => {
            return (

              <Link
                key={letter.id}
                to={`/letterIndex/${letter.capital}`}
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

                <Link
                  to=""
                >
                  <img
                    id="next"
                    src="../../images/next.gif"
                    alt="next button"
                  />
                </Link>
        {this.props.children}

        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(letterIndex)
