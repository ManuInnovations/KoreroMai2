const debug = require('debug')('components:footer')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');


class footer extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <footer className="footer">&copy; Manu Innovations Ltd. 2017</footer>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(footer)
