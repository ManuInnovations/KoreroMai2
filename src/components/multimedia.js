const debug = require('debug')('components:multimedia')
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent');


class multimedia extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letter } = this.props
    const singleLetter = letter.letter.letter

    return(
      <div className="container">
        <div className="row col-sm-12">

          <video controls>
          <source src={singleLetter.multimedia} type="video/mp4" />
          Your browser does not support HTML5 video.
          </video>

          <br />

          <Link to="/letter" key={letter.id}><img id="back" src="../../images/back.gif" /></Link>

          <Link to={`/letter/${singleLetter.capital}/write`} key={letter.id}><img id="next" src="../../images/next.gif" /></Link>

        </div>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(multimedia)
