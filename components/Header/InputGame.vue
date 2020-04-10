<template>
    <a href="#" class="game game-input">
        <div class="lap visible">
            <div class="game-title">
                {{title}}
            </div>
        </div>
        <div class="lap mouseover">
            X
        </div>
        <img :src="thumbnail" :alt="title">
    </a>
</template>

<script>
export default {
    props: ['title', 'thumbnail']
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
	img
		height: 100%
		width: 100%
		border-radius: 1rem
		box-shadow: 0 0 10px #444
	&-input
		max-height: 12.7rem
	&-title
		margin-bottom: .5rem
	.lap
        position: absolute
        border-radius: 1rem
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        height: 100%
        width: 100%
        opacity: 0
        transition: all 0.2s
        color: white
	.visible
		justify-content: flex-start
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