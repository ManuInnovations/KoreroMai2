import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import request from 'superagent'
import RaisedButton from 'material-ui/RaisedButton';


class Home extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }

  render() {
    const { dispatch } = this.props

    return (
      <div className='home'>
        <h1>Kōrero Mai</h1>
        <img src='./images/pipi.gif' width='200px' />
        <h2>Nau mai, haere mai</h2>
        <h3>Learn te reo Māori</h3>

        <Link to='/contents'>
          <RaisedButton
            className='play'>
            Let's Play!
          </RaisedButton>
        </Link>
      </div>
    )
  }
}

module.exports = connect(state => state)(Home)
