<template>
	<header>
		<div class="header-bar">
			<nav class="navbar">
				<div class="navbar-top">
					<a class="navbar-brand-lg navbar-item">BGamez</a>
					<div class="navbar-search navbar-item">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search">
						</div>
					</div>
				</div>
			</nav>
			<div class="user-games">
				<InputGame :title="'Game1'" :thumbnail="'https://cf.geekdo-images.com/thumb/img/M8wvA-wmIHVZLEbA1xt8oJK5mn8=/fit-in/200x150/pic1488707.jpg'" />
				<InputGame :title="'Game2'" :thumbnail="'https://cf.geekdo-images.com/thumb/img/3BY5s1Vl3gKhto7nbBPWAj6UAUE=/fit-in/200x150/pic3576240.png'" />
				<InputGame :title="'Game3'" :thumbnail="'https://cf.geekdo-images.com/thumb/img/3gk9i43I3UjBhv6vqQtMEEPRNhk=/fit-in/200x150/pic3673652.png'" />
			</div>
		</div>
	</header>
</template>

<script>
import InputGame from '~/components/Header/InputGame.vue'

export default {
  components: {
    InputGame
  }
}
</script>

<style lang="sass" scoped>
header
	padding: 8px 0
	.navbar
		margin-bottom: 2rem
		&-top
			display: flex
			flex: 1
		&-item
			margin-right: 1rem
		&-search
			flex: 1
			input
				height: 100%
		&-additional
			flex: 1

.user-games
	display: flex
</style>