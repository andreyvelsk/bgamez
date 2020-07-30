<template>
  <div class="input-group">
    <div class="dropdown-search">
      <b-form-input
        v-model="search"
        placeholder="Game name"
        autocomplete="off"
        @focus="showSearchResults = true"
        @blur="hideDropdownSearch"
      />
      <ul v-if="showSearchResults && ($store.state.searchGames).length" class="dropdown-results m-0">
        <li v-for="(game, key) in $store.state.searchGames" :key="key" @click="addUserGame(game)">
          {{ game.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      awaitingSearch: false,
      showSearchResults: false,
      search: '',
      userGame: {
        id: '20047',
        rating: 10
      }
    }
  },
  watch: {
    search () {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          this.awaitingSearch = false
          this.searchGames()
        }, 1000) // 1 sec delay
      }
      this.awaitingSearch = true
    }
  },
  methods: {
    searchGames () {
      this.$store.dispatch('getSearchGames', this.search)
    },
    hideDropdownSearch () {
      setTimeout(() => {
        this.showSearchResults = false
      }, 200)
    },
    addUserGame (game) {
      console.log(game)
      const userGame = { id: game.id, title: game.title, rating: 10 }
      this.$store.dispatch('addUserGame', userGame)
        .then(
          this.search = ''
        )
    }
  }
}
</script>

<style lang="sass" scoped>
.dropdown
  &-search
    position: relative
    background-color: #f6f6f6
    width: 100%
  &-results
    background-color: #f6f6f6
    border: 1px solid #ddd
    padding: 0
    z-index: 1
    position: absolute
    min-width: 230px
    overflow: auto
    li
      color: black
      padding: 12px 16px
      list-style-type: none
      display: block
      &:hover
        background-color: #ddd
</style>
