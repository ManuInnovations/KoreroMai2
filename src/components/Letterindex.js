const debug = require("debug")("components:Letterindex")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link} = require("react-router")

const NavLink = require("./NavLink.js")

class Letterindex extends React.Component {

  constructor(){
    super()
    this.nextButton = this.nextButton.bind(this)
    this.previousButton = this.previousButton.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
  }

  nextButton(letter,letters,dispatch){
    const id = letters.findIndex(item =>{
      return item.id ===letter.id
    })
    if(id === (letters.length -1)){
      this.props.router.push(`/letterindex/${letters[0].capital}`)
      dispatch({
        type: "RENDER_LETTER",
        payload: letters[0],
      })
    }
    else {
      this.props.router.push(`/letterindex/${letters[id+1].capital}`)
        dispatch({
          type: "RENDER_LETTER",
          payload: letters[id+1],
        })
    }
  }

  previousButton(letter,letters,dispatch){
    const id = letters.findIndex(item =>{
      return item.id ===letter.id
    })
    if(id === 0){
      this.props.router.push(`/letterindex/${letters[letters.length-1].capital}`)
      dispatch({
        type: "RENDER_LETTER",
        payload: letters[letters.length-1],
      })
    }
    else {
      this.props.router.push(`/letterindex/${letters[id-1].capital}`)
      dispatch({
        type: "RENDER_LETTER",
        payload: letters[id-1],
      })
    }
  }

  render() {
    debug(this.props)
    const { dispatch, letters, letter } = this.props
    const currentLetter = letter.capital

    return (
      <div className="row">
        <div className="col-sm-12">

          <img id="back" src="../../images/back.gif" alt="back button"
            onClick={()=>
            this.previousButton(letter, letters, dispatch)}
          />
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
        <img id="next" src="../../images/next.gif" alt="next button"
        onClick={()=>
          this.nextButton(letter, letters, dispatch)}
          />
        {this.props.children}

        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Letterindex)
