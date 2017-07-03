import React from 'react'
require('./styles.css')

export default class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    let languages = ['All', 'JavaScript', 'Swift', 'Java', 'CSS', 'Python']
    return (
      <ul className="languages">
        {languages.map((lang) => {
          return (
            <li
              style={lang === this.state.selectedLanguage ? {color: 'palevioletred'} : null}
              onClick={this.updateLanguage.bind(this, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}
