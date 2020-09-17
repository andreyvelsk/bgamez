<template>
  <div class="input-game mr-3 mb-3 h-100">
    <div
      class="input-game_body"
      :style="'background-image: url()'"
      @click="deleteGame"
    >
      {{ title }}
      <span class="input-game_delete">
        &#10005;
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
    gamekey: {
      type: Number,
      default: 0
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
