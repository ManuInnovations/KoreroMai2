const debug = require('debug')('components:Privacy')
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Footer from './Footer'
import Header from './Header'


class Privacy extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }
  render() {
    debug(this.props)
    return (
      <div className='privacy-container'>
        <Header />
        <div className='privacy-box'>
          <h2 className='privacy-heading'>Kōrero Mai Privacy Policy</h2>
          <div className='privacy-articles'>
            <p className='opening'>Your privacy on the Internet is important to us.
            This privacy policy discloses what information we gather,
            how we use it, and how to correct or change it.</p>
            <h3>Information</h3>
            <p className='article'>We do not gather or store any personal information from users of this web app, other than personal information, provided to us by
            you through correspondence
            and/or discussions.</p>
            <h3>Security</h3>
            <p className='article'>We are committed to ensuring that
            your information is secure.
            In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure any personal information collected.</p>
            <h3>Use of your information</h3>
            <p className='article'>We will never sell or rent your
            personal information to third parties. We will use information we collect from you for the primary purpose for which it is collected and for such other
            secondary purposes that are related to the primary purpose of collection.</p>
            <h3>Email Newsletters and other notices</h3>
            <p className='article'>It is our policy to send only emails you elect to receive in a sign-up process. In addition, we may send out promotional material to you promoting new or amended material on our site where we
            think that may be relevant to you. It is our policy to immediately remove any person from any mailing list upon the person’s request.</p>
            <h3>Access and removal of Information</h3>
            <p className='article'>You have the right to seek access the personal information held about you and to advise us of any inaccuracy. There are some exceptions to this right set out in the Privacy Act. If you make an
            access request, we will ask you to verify your identity and specify what information you require.</p>
            <h3>Updates to our information practices</h3>
            <p className='article'>We reserve the right to change this policy. By continuing to use the Website, you agree to be bound by the amended policy. You should check from time to time to see if the policy has changed.</p>
          </div>
          <img src='../../images/words/tohora.svg' alt='tohora - whale' className='privacy-tohora'/>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(Privacy)
