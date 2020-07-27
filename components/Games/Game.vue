<template>
  <div class="card card-game h-100">
    <a href="#" class="game game-input h-100" :style="`background-image: url(${thumbnail})`">
      <div class="lap visible">
        <div class="game-title">
          {{ title }}
        </div>
        <div class="game-rating">
          {{ rating }}
        </div>
      </div>
      <div class="lap mouseover" @click="addUserGame()">
        add
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    gameid: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Game title'
    },
    thumbnail: {
      type: String,
      default: null
    },
    rating: {
      type: Number,
      default: 10
    }
  },
  computed: {
    thumbSource () {
      return this.thumbnail || 'https://cf.geekdo-images.com/micro/img/QZDNfKAPYlXkZg265NxdjgShBXY=/fit-in/64x64/pic1657689.jpg'
    }
  },
  methods: {
    addUserGame () {
      const userGame = { id: this.gameid, title: this.title, thumbnail: this.thumbnail, rating: 10 }
      this.$store.dispatch('addUserGame', userGame)
    }
  }
}
</script>

<style lang="sass" scoped>
.card-game
  border: none
  color: #000
  font-size: 1rem
  background-color: transparent
  a
    text-decoration: none
.game
  position: relative
  border-radius: 50px
  color: #fff
  font-size: 2rem
  display: block
  border-radius: 1rem
  overflow: hidden
  background-size: cover
  &-input
    min-height: 12rem
  &-title
    font-size: 1.3rem
    padding: .5rem
  .lap
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
    position: absolute
    top: 0
  &:hover
    .visible
      opacity: 0
    .mouseover
      opacity: 1
</style>
