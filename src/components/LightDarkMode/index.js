import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeBackground = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    let changeButton

    if (isDarkMode) {
      changeButton = (
        <div className="bg-container">
          <div className="card-container1">
            <h1 className="header1">Click To Change Mode</h1>
            <button
              type="button"
              className="button"
              onClick={this.onChangeBackground}
            >
              Light Mode
            </button>
          </div>
        </div>
      )
    } else {
      changeButton = (
        <div className="bg-container">
          <div className="card-container">
            <h1 className="header">Click To Change Mode</h1>
            <button
              type="button"
              className="button"
              onClick={this.onChangeBackground}
            >
              Dark Mode
            </button>
          </div>
        </div>
      )
    }

    return <div className="bg-container">{changeButton}</div>
  }
}

export default LightDarkMode
