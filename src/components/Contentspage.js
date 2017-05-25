const debug = require("debug")("components:Contentspage")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class Contentspage extends React.Component {

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

                <Link key={letter.id} to={`/letterindex/${letter.capital}`}>
                  <div
                    className="btn-group btn-group-xl btn-group-center wiggle-me"
                    role="group"
                    aria-label="...">

                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                          dispatch({
                            type: "RENDER_LETTER",
                            payload: letter,
                          })
                      }>
                      {letter.capital}
                    </button>

                  </div>
                </Link>
              )
            })
          }
        </div>
        <Link to="/media">
          <button
            type="button"
            className="btn btn-xl">
            Go to Media Library
          </button>
        </Link>

      </div>
    )
  }
}

module.exports = connect(state => state)(Contentspage)
