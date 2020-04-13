<template>
  <header>
    <div class="header-bar">
      <nav class="navbar">
        <div class="navbar-top">
          <a class="navbar-brand-lg navbar-item">BGamez</a>
          <div class="navbar-search navbar-item">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
          </div>
        </div>
      </nav>
      <div v-if="postdata.games.length" class="user-games">
        <InputGame
          v-for="(game, key) in postdata.games"
          :key="key"
          :title="game.title"
          :thumbnail="game.thumbnail"
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
export default {
  components: {
    InputGame
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
    &-item
      margin-right: 1rem
    &-search
      flex: 1
      input
        height: 100%
    &-additional
      flex: 1

.user-games
  display: flex
</style>
