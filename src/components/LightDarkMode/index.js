// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickingButt = () => {
    const {isDarkMode} = this.state
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modelClass = isDarkMode
      ? 'dark-card-container'
      : 'light-card-container'
    const headColor = isDarkMode ? 'light-head' : 'dark-head'
    return (
      <div className="bg-container">
        <div className={`container ${modelClass}`}>
          <h1 className={headColor}>Click To Change Mode</h1>
          <button
            onClick={this.onClickingButt}
            className="button"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
