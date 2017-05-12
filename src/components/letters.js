const debug = require('debug')('components:letters')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');
const { Link } = require('react-router')

class letters extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letters } = this.props
    console.log('letters this.props ', this.props)





    return(
      <div className="row">
        <div className="col-sm-12">
        {
          letters.map((letter) => {
            return (

              <Link key={letter.id} to={`/letters/${letter.capital}`}>
                <div className="btn-group btn-group-lg btn-group-center" role="group" aria-label="...">
                  <button type="button" className="btn btn-default"
                    onClick={() => {
                        store.dispatch({
                          type: 'CHANGE_ROUTE',
                          payload: letter
                        })
                      }
                    }> {letter.capital}
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

  // {letter}
  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    const { dispatch, router } = this.props
  }

}

module.exports = connect((state) => state)(letters)


//TODO store is not defined error message
