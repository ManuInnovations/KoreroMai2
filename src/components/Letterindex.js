const debug = require("debug")("components:Letterindex")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

const NavLink = require("./NavLink.js")

class Letterindex extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    return (
      <div className="row">
        <div className="col-sm-12">
        <Link to="">
          <img id="back" src="../../images/back.gif" alt="back button" />
        </Link>
        {
          letters.map((letter) => {

            return (
              <NavLink
                key={letter.id}
                to={`/letterindex/${letter.capital}`}
                activeClassName="active">
                <div
                  className="btn-group btn-group-lg btn-group-center wiggle-me"
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
              </NavLink>
            )
          })
        }

                <Link to="">
                  <img id="next" src="../../images/next.gif" alt="next button" />
                </Link>

          {this.props.children}

        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Letterindex)
