<template>
  <header>
    <div class="header-bar">
      <nav class="navbar">
        <div class="navbar-top">
          <a class="navbar-brand-lg navbar-item display-4">BGamez</a>
          <div class="navbar-search navbar-item">
            <search-component />
          </div>
        </div>
      </nav>
      <div v-if="postdata.games.length" class="user-games">
        <input-game
          v-for="(game, key) in postdata.games"
          :key="key"
          :title="game.title"
          :gamekey="key"
        />
      </div>
      <div v-else class="user-games">
        Select some games
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import InputGame from '~/components/Header/InputGame.vue'
import SearchComponent from '~/components/Header/Search.vue'
export default {
  components: {
    InputGame,
    SearchComponent
  },
  computed: {
    ...mapState(['postdata'])
  }
}
</script>

<style lang="sass" scoped>
header
  padding: 8px 0
  .navbar
    margin-bottom: 2rem
    &-top
      display: flex
      flex: 1
      align-items: center
    &-item
      margin-right: 1rem
    &-search
      flex: 1
    &-additional
      flex: 1

.user-games
  display: flex
  flex-wrap: wrap
</style>
