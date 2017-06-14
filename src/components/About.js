const React = require("react")
const { connect } = require("react-redux")

class About extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {

    return (
      <div className="row about">
        <div className="col-sm-12 team">
          <h1>Kia Ora!</h1>
          <h3>Kōrero Mai was made with aroha
          by the team at Manu.</h3>
        </div>
        <div className="col-sm-4 profile">
          <h3><b>Janie Tito</b> (Ngā Puhi me
          Ngāti Whātua)</h3>
          <img src="images/janie.png" alt="Janie Tito" />
        </div>
        <div className="col-sm-4 profile">
          <h3><b>Anna-Marie Vos</b> (Āwherika
          ki te Tonga)</h3>
          <img src="images/anna.png" alt="Anna-Marie Vos" />
        </div>
        <div className="col-sm-4 profile">
          <h3><b>Meghan Hughes</b> (Ngāti Pākehā)</h3><br/>
          <img src="images/meghan.png" alt="Meghan Hughes" />
        </div>
        <div className="col-sm-12 purpose">
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
        <div className="col-sm-12 contact">
          <h4>Please get in touch via
          Email: hello@manu.net.nz</h4>
          <h4>To find out more about
          Manu: <a href="https://www.manu.net.nz">www.manu.net.nz</a></h4>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(About)
