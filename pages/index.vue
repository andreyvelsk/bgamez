<template>
  <div class="container-fluid">
    <TheHeader/>
    <div class="main-title">
			<span>
				Recomendations
			</span>
		</div>
    <GamesList />
  </div>
</template>

<script>
import TheHeader from '~/components/Header/TheHeader.vue'
import GamesList from '~/components/Games/GamesList.vue'

export default {
  components: {
    TheHeader,
    GamesList
  }
}
</script>

<style lang="sass" scoped>
.main-title
	display: flex
	justify-content: center
	padding: 2rem
</style>
