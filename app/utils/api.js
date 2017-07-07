import axios from 'axios'

const key = {id: 'CLIENT_ID', secret: 'CLIENT_SECRET'},
      params = `?client_id=${key.id}&client_secret=${key.secret}`

const getProfile = (username) => {
  return axios.get('https://api.github.com/user/' + username + params)
    .then((user) => {
      return user.data
    })
}

const getRepos = (username) => {
  return axios.get('https://api.github.com/user' + username + '/repos' + params + '&per_page=100')
}

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  let followers = profile.followers,
      totalStars = getStarCount(repos)

  return (followers * 3) + totalStars
}

const handleError = (err) => {
  console.warn(err)
  return null
}

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    let profile = data[0],
        repos = data[1]

    return {
      profile,
      score: calculateScore(profile, repos)
    }
  })
}

const sortPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

export default {
  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },
  fetchPopularRepos: (language) => {
    let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language +'&sort=stars&order=desc&type=Repositories&per_page=20')

    return axios.get(encodedURI).then((res) => {
      return res.data.items
    })
  }
}
