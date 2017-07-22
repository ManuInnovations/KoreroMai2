const debug = require('debug')('components:Displayletter')
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import request from 'superagent'

import LetterIndex from './Letterindex.js'
import MobileViewFooter from './MobileViewFooter.js'


class Displayletter extends React.Component {

  constructor() {
    super()
    this.playCapital = this.playCapital.bind(this)
    this.playLower = this.playLower.bind(this)
    this.playWords = {}
    this.nextButton = this.nextButton.bind(this)
    this.previousButton = this.previousButton.bind(this)
  }

  nextButton(letter,letters,dispatch){
    const id = letters.findIndex(item =>{
      return item.id === letter.id
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

  playCapital() {
    this.playCap.load()
    this.playCap.play()
  }

  playLower() {
    this.playLow.load()
    this.playLow.play()
  }

  playSound(i) {
    this.playWords[i].load()
    this.playWords[i].play()
  }

  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }

  render() {
    debug(this.props)
    const { dispatch, letters, letter } = this.props
    const wordsArr = letter.wordImage
    const currentLetter = letter.capital

    return (
      <div className='letter-container'>
          <h2>Letter</h2>

          <audio
            key={letter.capitalSound}
            ref={(cap) => { this.playCap = cap; }}>
            <source
              src={letter.capitalSound}
              preload='auto' />
            <track
              kind='captions'
              src=''
              srcLang='en' />
          </audio>

          <audio
            key={letter.lowerSound}
            ref={(low) => { this.playLow = low; }}>
            <source
              src={letter.lowerSound}
              preload='auto' />
            <track
              kind='captions'
              src=''
              srcLang='en' />
          </audio>

        <div className='letters-box'>

          <img id='previous-letter' src="../../images/previous.png" alt="back button"
            onClick={()=>
            this.previousButton(letter, letters, dispatch)}
          />

          <button
            type='button'
            className='display-letter'
            onClick={this.playCapital}>
            {letter.capital}
          </button>

          <button
            type='button'
            className='display-letter'
            onClick={this.playLower}>
            {letter.lowercase}
          </button>

          <img src='/images/listen.png' width='30px' />

          <img id='next-letter' src="../../images/next.png" alt="next button"
          onClick={()=>
            this.nextButton(letter, letters, dispatch)}
            />
        </div>

        <div className='word-container'>

          <div className='words-box'>
            {this.generateWord(wordsArr)}
          </div>

          <Link key={letter.id} to={`/media/${letter.capital}`}>
            <img src='/images/play.png' width='30px' />
          </Link>

        </div>

        <MobileViewFooter />

      </div>
    )
  }

  generateWord(wordsArr) {
    return wordsArr.map((word) => {
      return (
        <div>
          <audio
            key={word.id}
            ref={(x) => { this.playWords[word.id] = x; }}>
            <source src={word.sound} preload='auto'/>
          </audio>

          <img id='wordImage' src={word.image} onClick={this.playSound.bind(this, word.id)} />
        </div>
      )
    })
  }
}

module.exports = connect(state => state)(Displayletter)
