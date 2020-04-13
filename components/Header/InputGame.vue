<template>
  <a href="#" class="game game-input">
    <div class="lap visible">
      <div class="game-title">
        {{ gamekey }}
      </div>
    </div>
    <div class="lap mouseover" @click="deleteGame">
      X
    </div>
    <img :src="thumbnail" :alt="title">
  </a>
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
      default: 'https://cf.geekdo-images.com/micro/img/QZDNfKAPYlXkZg265NxdjgShBXY=/fit-in/64x64/pic1657689.jpg'
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

<style lang="sass">
.game
  position: relative
  border-radius: 50px
  color: #fff
  font-size: 1.7rem
  margin-right: 1rem
  display: block
  border-radius: 1rem
  overflow: hidden
  img
    border-radius: 1rem
    box-shadow: 0 0 10px #444
    height: 100%
    width: 100%
  &-input
    max-height: 12.7rem
  &-title
    font-size: 1rem
    padding: .5rem
  .lap
    position: absolute
    border-radius: 1rem
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    align-items: center
    height: 100%
    width: 100%
    opacity: 0
    transition: all 0.2s
    color: white
  .visible
    background: rgba(0,0,0,.5)
    opacity: 1
  .mouseover
    background: rgba(0,0,0,.6)
  &:hover
    .visible
      opacity: 0
    .mouseover
      opacity: 1
</style>
