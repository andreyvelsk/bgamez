<template>
  <div class="row">
    <div
      v-for="game in recGames"
      :key="game.id"
      class="col-lg-2 col-md-3 col-6 mb-5"
    >
      <GameComponent
        :gameid="game.id"
        :title="game.title"
        :thumbnail="game.thumbnail"
        :rating="game.bgggeekrating"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GameComponent from '~/components/Games/Game.vue'
export default {
  components: {
    GameComponent
  },
  computed: {
    ...mapState(['recGames'])
  },
  mounted () {
    this.$store.dispatch('addUserGame', [])
  }
}
</script>

<style lang="scss" scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
