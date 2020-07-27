<template>
  <div class="input-game mr-3 mb-3 h-100">
    <div
    class="input-game_body"
    @click="deleteGame"
    :style="'background-image: url()'">
      {{ title }}
      <span class="input-game_delete">
        X
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Game title'
    },
    thumbnail: {
      type: String,
      default: null
    },
    gamekey: {
      type: Number,
      default: 0
    }
  },
  computed: {
    thumbSource () {
      return this.thumbnail || 'https://cf.geekdo-images.com/micro/img/QZDNfKAPYlXkZg265NxdjgShBXY=/fit-in/64x64/pic1657689.jpg'
    }
  },
  methods: {
    deleteGame () {
      this.$store.dispatch('deleteGameFromList', this.gamekey)
    }
  }
}
</script>

<style lang="sass" scoped>
  .input-game
    border-radius: 1rem
    background: rgba(0,0,0,.5)
    opacity: 1
    &_body
      padding: .2rem 1rem
      font-size: 1.2rem
      cursor: pointer
</style>
