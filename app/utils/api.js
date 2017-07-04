import axios from 'axios'

export default {
  fetchPopularRepos: (language) => {
    let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language +'&sort=stars&order=desc&type=Repositories&per_page=20')

    return axios.get(encodedURI).then((res) => {
      return res.data.items
    })
  }
}
