import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Footer from './Footer.js'
import Header from './Header.js'


class About extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }
  render() {
    return (
      <div className='about-container'>
        <Header />
        <div className='about-box'>
          <h2 className='about-heading'>About Us</h2>
          <div className='about-content'>
            <p className='about-text'>Kia Ora! Kōrero Mai was made with aroha by the team at Manu Innovations, and with the assistance of the talented UX designer, Katie Deller.</p>
            <div className='profile-images'>
              <div className='profile'>
                <img src='images/janie.png' alt='Janie Tito' />
                <p><b>Janie Tito - developer</b></p>
                <p><i>Ngā Puhi me Ngāti Whātua</i></p>
              </div>
              <div className='profile'>
                <img src='images/anna.png' alt='Anna-Marie Vos' />
                <p><b>Anna-Marie Vos - developer</b></p> <p><i>Āwherika ki te Tonga</i></p>
              </div>
              <div className='profile'>
                <img src='images/meghan.png' alt='Meghan Hughes' />
                <p><b>Meghan Hughes - developer</b></p>
                <p><i>Ngāti Pākehā</i></p>
              </div>
              <div className='profile'>
                <img src='images/katie.png' alt='Katie Deller' />
                <p><b>Katie Deller - designer</b></p>
                <p><i>Ngāti Porou</i></p>
              </div>
            </div>
            <div className='purpose'>
              <h3>How this came about</h3>
              <p>Janie has two tamariki who
              attend bilingual classes at Koraunui
              Primary School in Lower Hutt. One day
              their teacher shared her wish for an
              app to help her students learn te reo
              Māori phonics - and this sparked the
              idea for Kōrero Mai.</p>
              <p>Koraunui Primary School has been a
              huge help in the development of this
              app, as well as providing voices and
              video footage. Ngā mihi nui ki a
              koutou!</p>
            </div>
            <div className='contact'>
              <p>Get in touch,
              Email: <b>hello@manu.net.nz</b></p>
              <p>To contact Katie, Email: <b>kdellerdesign@gmail.com</b></p>
              <p>To find out more about
              Manu: <a href='https://www.manu.net.nz'><b>www.manu.net.nz</b></a></p>
            </div>
          </div>
          <div>Some graphics in this site provided by: <a target="_blank" href="https://www.vecteezy.com">Vecteezy</a></div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(About)
