export const state = () => ({
  isLoading: false,
  bayesRating: [],
  recGames: [],
  searchGames: [],
  postdata: {
    games: []
  }
})

export const mutations = {
  addGameToListM (state, payload) {
    if ('title' in payload && 'id' in payload) {
      state.postdata.games.unshift(payload)
      state.searchGames = []
    }
  },
  setRecomendationsM (state, payload) {
    state.bayesRating = payload.attributes
    state.recGames = payload.games
    state.isLoading = false
  },
  setSearchGamesM (state, payload) {
    state.searchGames = payload
  },
  deleteGameFromListM (state, id) {
    state.postdata.games.splice(id, 1)
  },
  setDataLoadingM (state, status) {
    state.isLoading = status
  },
  clearRecomendations (state) {
    state.bayesRating = []
    state.recGames = []
  }
}

export const actions = {
  addUserGame ({ dispatch }, payload) {
    dispatch('promiseMutation', { mut: 'addGameToListM', payload })
      .then(
        dispatch('getRecomendations')
      )
  },
  getRecomendations ({ state, commit, getters }) {
    const QUERY = 'http://api.boardgamefinder.test/recomendations'
    commit('setDataLoadingM', true)
    const data = {
      games: getters.gamesWithRating
    }
    this.$axios.$post(QUERY, data)
      .then((response) => {
        if (response.status === 'ok') {
          commit('setRecomendationsM', response)
        } else {
          alert(response.message)
          commit('setDataLoadingM', false)
        }
      })
      .catch(() => {
        alert('some error occured')
        commit('setDataLoadingM', false)
      })
  },
  getSearchGames ({ state, commit }, text) {
    if (text) {
      const QUERY = 'http://api.boardgamefinder.test/search/' + text
      this.$axios.$get(QUERY)
        .then((response) => {
          commit('setSearchGamesM', response)
        })
    } else {
      commit('setSearchGamesM', [])
    }
  },
  deleteGameFromList ({ getters, dispatch, commit }, id) {
    dispatch('promiseMutation', { mut: 'deleteGameFromListM', payload: id })
      .then(() => {
        if (getters.gamesWithRating.length > 0) {
          dispatch('getRecomendations')
        } else {
          dispatch('getRecomendations')
        }
      })
  },
  promiseMutation ({ commit }, { mut, payload }) {
    return new Promise((resolve) => {
      commit(mut, payload)
      resolve()
    })
  }
}

export const getters = {
  gamesWithRating: (state) => {
    return (state.postdata.games).filter(item => item.rating > 0)
  }
}
