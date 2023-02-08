import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscrib: false}

  onSubscrib = () => {
    this.setState(prevstate => ({subscrib: !prevstate.subscrib}))
  }

  getButtonText = () => {
    const {subscrib} = this.state
    return subscrib ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="sub-heading">Thank you! Happy Learning</p>

        <button className="btn" type="button" onClick={this.onSubscrib}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
