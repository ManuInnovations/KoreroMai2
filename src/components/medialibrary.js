const debug = require("debug")("components:medialibrary")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class medialibrary extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    console.log("children,", this.props.children);

    return (
      <div className="row">
        {
          letters.map((letter) => {
            return (
              <div className="col-sm-3 preview">
                <Link key={letter.id} to={`/letterindex/${letter.capital}/watch`}>
                  <figure>
                    <img
                      src={`${letter.wordImage}`}
                      onClick={() =>
                          dispatch({
                            type: "RENDER_LETTER",
                            payload: { letter },
                          })
                      } />
                    <figcaption>
                      {letter.mediaName}
                    </figcaption>
                  </figure>
                </Link>
              </div>
            )
          })
        }
          {this.props.children}
      </div>
    )
  }
}

module.exports = connect(state => state)(medialibrary)
