const debug = require('debug')('components:letters')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');


class letters extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letters } = this.props

    console.log('letters this.props ', this.props)

    return(
      <div>
      {
        letters.map((letter) => {
          return (
            <button
            onClick={
              () => {
                store.dispatch({
                  type: 'CHANGE_ROUTE',
                  payload: letter
                })
              }
            }>

            {letter}

            </button>
          )
        })
      }
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(letters)
