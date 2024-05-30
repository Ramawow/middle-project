new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    userSearch: '',
    searchResult: null,
    isLoading: false,
    isError: false,
    errorMessage: null
  },
  methods: {
    searchAnime: function () {
      let self = this;
      this.isLoading = true
      axios.get(`https://api.jikan.moe/v3/search/anime?q=${self.userSearch}&page=1`)
      .then( response => {
        console.log(response)
        self.searchResult = response.data.results
      })
      .catch( error => {
        console.log(error)
        console.log('something is wrong with the code or the server')
        self.isError = true
        self.errorMessage = error
      })
      .finally(function() {
        self.isLoading = false
      })
    }
  }
})

