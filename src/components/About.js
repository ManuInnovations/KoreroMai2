import React from "react"
import { connect } from "react-redux"
import Footer from "./Footer.js"
import Header from "./Header.js"

class About extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }
  render() {
    return (
      <div className="about-container">
        <Header />
        <div className="about-box">
          <h2 className="about-heading">About Us</h2>
          <div className="about-content">
            <p className="about-text">
              Kia Ora! Kōrero Mai was made with aroha by the team at Manu Innovations, and with the
              assistance of the talented designer, Katie Deller.
            </p>
            <div className="profile-images">
              <div className="profile">
                <img src="images/janie.png" alt="Janie Tito" />
                <p>
                  <b>Janie Tito - developer</b>
                </p>
                <p>
                  <i>Ngā Puhi me Ngāti Whātua</i>
                </p>
              </div>
              <div className="profile">
                <img src="images/anna.png" alt="Anna-Marie Vos" />
                <p>
                  <b>Anna-Marie Vos - developer</b>
                </p>{" "}
                <p>
                  <i>Āwherika ki te Tonga</i>
                </p>
              </div>
              <div className="profile">
                <img src="images/meghan.png" alt="Meghan Hughes" />
                <p>
                  <b>Meghan Hughes - developer</b>
                </p>
                <p>
                  <i>Pākehā</i>
                </p>
              </div>
              <div className="profile">
                <img src="images/katie.png" alt="Katie Deller" />
                <p>
                  <b>Katie Deller - designer</b>
                </p>
                <p>
                  <i>Ngāti Porou</i>
                </p>
              </div>
            </div>
            <div className="purpose">
              <h3>How this came about</h3>
              <p>
                Janie has two tamāhine who attend bilingual classes at Koraunui Primary School in
                Lower Hutt. One day their teacher shared her wish for more digital resources to help
                her students learn te reo Māori phonics - and this sparked the idea for Kōrero Mai.
              </p>
              <p>
                A big thank you to the kaiako and tauira of Koraunui Primary School who sang some of
                the beautiful waiata. Ngā mihi nui ki a koutou!
              </p>
              <p>
                Thank you to Georgia and Aaliya for recording letters, words and songs. Kia ora
                kōrua!
              </p>
              <p>
                Please let us know if this resource helped you or your tamariki and how we could
                make it better.
              </p>
            </div>
            <div className="contact">
              <p className="email">hello@manu.net.nz</p>
              <p>To contact Katie Deller:</p> <p className="email">kdellerdesign@gmail.com</p>
              <p>
                To find out more about Manu:{" "}
                <a href="https://www.manu.net.nz">
                  <b>www.manu.net.nz</b>
                </a>
              </p>
            </div>
            <div>
              Some graphics in this site provided by{" "}
              <a target="_blank" href="https://www.vecteezy.com" rel="noopener noreferrer">
                Vecteezy.
              </a>{" "}
              Capital letter sounds used with permission from the{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.tetaurawhiri.govt.nz/learn-te-reo-maori/whakahuatanga-pronunciation/"
              >
                Māori Language Commission website.
              </a>
            </div>
            <img src="./images/words/tohora.svg" alt="whale" className="hmImage" />
            <img src="./images/words/tuatara.svg" alt="tuatara" className="hmImage" />
            <img src="./images/words/wheke.svg" alt="octopus" className="hmImage" />
          </div>
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(About)
