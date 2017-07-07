import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import Loader from './presentational/Loader'
import styles from '../index.sass'

const SelectLanguage = (props) => {
  let languages = ['All', 'JavaScript', 'Swift', 'Java', 'CSS', 'Python']
  return (
    <ul className={styles.languages}>
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: 'palevioletred'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

const Repos = (props) => {
  return (
    <ul className={styles.popularList}>
      {props.repos.map((repo, i) => {
        return (
          <li key={repo.name} className={styles.popularItem}>
            <div>#{i + 1}</div>
            <ul className={styles.spaceListItems}>
              <li>
                <img className={styles.avatar} src={repo.owner.avatar_url} alt={repo.owner.login} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    api.fetchPopularRepos(lang).then((repos) => {
      this.setState({repos})
    })
  }

  render() {
    return (
      <section>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <Loader /> : <Repos repos={this.state.repos} />}
      </section>
    )
  }
}
