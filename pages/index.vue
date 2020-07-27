<template>
  <div id="index" class="container-fluid" :class="{'data-loading': isLoading}">
    <TheHeader />
    <div class="main-content">
      <div class="main-title">
        <span>
          Recomendations
        </span>
      </div>
      <GamesList />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '~/components/Header/TheHeader.vue'
import GamesList from '~/components/Games/GamesList.vue'

export default {
  components: {
    TheHeader,
    GamesList
  },
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>

<style lang="sass" scoped>
.main
  &-title
    display: flex
    justify-content: center
    padding: 2rem
  &-content
    transition: all .3s
.data-loading
  opacity: 0.3
  pointer-events: none
  user-select: none
#index
  transition: all .5s
</style>
