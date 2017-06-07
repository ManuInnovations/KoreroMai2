const debug = require("debug")("components:Letterindex")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

const NavLink = require("./NavLink.js")

class Letterindex extends React.Component {

  constructor(){
    super()
    this.nextButton = this.nextButton.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
  }

  nextButton(letter){
    console.log('nextButton', letter.id);
    return (alert("hello"))
  }

  render() {
    debug(this.props)
    const { dispatch, letters, letter } = this.props
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



        <button
          type="button"
          onClick={()=>
          this.nextButton(letter)}
        >
          <img id="next" src="../../images/next.gif" alt="next button" />
        </button>
          {this.props.children}

        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Letterindex)
