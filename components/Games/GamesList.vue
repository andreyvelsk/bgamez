<template>
  <div class="card-columns">
    <Game
      v-for="(game, key) in recGames"
      :key="key"
      :gameid="game.id"
      :title="game.title"
      :thumbnail="game.thumbnail"
      :rating="game.bgggeekrating"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Game from '~/components/Games/Game.vue'
export default {
  components: {
    Game
  },
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
  computed: {
    ...mapState(['recGames'])
  },
  created () {
    this.$store.dispatch('addUserGame', this.userGame)
  }
}
</script>

<style lang="sass" scoped>
.card-columns
  column-count: 8
</style>
