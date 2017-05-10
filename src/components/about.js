const debug = require('debug')('components:home')
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent');


class about extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div className='about'>
        <div className='team'>
          <h1>Kia Ora!</h1>
          <h2>Kōrero Mai was made with aroha by the team at Manu.</h2>
          <h3>Janie Tito (Ngā Puhi me Ngāti Whātua)</h3><img src='images/janie.png' />
          <h3>Anna-Marie Vos (Āwherika ki te Tonga)</h3><img src='images/anna.png' />
          <h3>Meghan Hughes (Ngāti Pākehā)</h3><img src='images/meghan.png' />
        </div>
        <div className='purpose'>
          <h2>How this came about</h2>
          <h3>Janie has two tamariki who attend bilingual classes at Koraunui Primary School in Lower Hutt. One day their teacher shared her wish for an app to help her students learn te reo Māori phonics - and this sparked the idea for Kōrero Mai.</h3>
          <h3>Koraunui Primary School has been a huge help in the development of this app, as well as providing voices and video footage. Ngā mihi nui ki a koutou!</h3>
        </div>
        <div className='contact'>
          <h3>Please get in touch via Email: hello@manu.net.nz</h3>
          <h3>To find out more about Manu: www.manu.net.nz</h3>
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

module.exports = connect((state) => state)(about)
