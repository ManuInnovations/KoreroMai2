const debug = require("debug")("components:home")
const React = require("react")
const { connect } = require("react-redux")

class about extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)

    return (
      <div className="about">
        <div className="team">
          <h1>Kia Ora!</h1>
          <h2>Kōrero Mai was made with aroha
          by the team at Manu.</h2>
          <h3>Janie Tito (Ngā Puhi me
          Ngāti Whātua)</h3>
          <img
            src="images/janie.png"
            alt="Janie Tito"
          />
          <h3>Anna-Marie Vos (Āwherika
          ki te Tonga)</h3>
          <img
            src="images/anna.png"
            alt="Anna-Marie Vos"
          />
          <h3>Meghan Hughes (Ngāti Pākehā)</h3>
          <img
            src="images/meghan.png"
            alt="Meghan Hughes"
          />
        </div>
        <div className="purpose">
          <h2>How this came about</h2>
          <h4>Janie has two tamariki who
          attend bilingual classes at Koraunui
          Primary School in Lower Hutt. One day
          their teacher shared her wish for an
          app to help her students learn te reo
          Māori phonics - and this sparked the
          idea for Kōrero Mai.</h4>
          <h4>Koraunui Primary School has been a
          huge help in the development of this
          app, as well as providing voices and
          video footage. Ngā mihi nui ki a
          koutou!</h4>
        </div>
        <div className="contact">
          <h4>Please get in touch via
          Email: hello@manu.net.nz</h4>
          <h4>To find out more about
          Manu: www.manu.net.nz</h4>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(about)
