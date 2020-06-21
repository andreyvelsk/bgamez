<template>
  <div class="card">
    <a href="#" class="game game-input" tabIndex="-1">
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
      <img :src="thumbSource" :alt="title">
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
      type: String
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

<style lang="sass">
.card
    border: none
    color: #000
    max-width: 15rem
    font-size: 1rem
    display: block
    background-color: transparent
    .game
      img
        width: 100%
</style>
