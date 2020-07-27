<template>
  <transition-group name="flip-list" tag="div" class="row">
    <div
      class="col-lg-2 col-md-3 col-6 mb-5"
      v-for="game in recGames"
      :key="game.id">
      <GameComponent
        :gameid="game.id"
        :title="game.title"
        :thumbnail="game.thumbnail"
        :rating="game.bgggeekrating"
      />
    </div>
  </transition-group>
</template>

<script>
import { mapState } from 'vuex'
import GameComponent from '~/components/Games/Game.vue'
export default {
  components: {
    GameComponent
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
  transition: all .5s
  column-count: 8
.flip-list-move
  transition: transform 1s
.list-complete-item
  transition: all 1s
  display: inline-block
  margin-right: 10px
.list-complete-enter, .list-complete-leave-to
  opacity: 0
  transform: translateY(30px)
.list-complete-leave-active
  position: absolute
</style>
