<template>
    <div class="card">
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
    </div>
</template>

<script>
export default {
    props: ['title', 'thumbnail']
}
</script>

<style lang="sass">
.card
    background-color: transparent
</style>