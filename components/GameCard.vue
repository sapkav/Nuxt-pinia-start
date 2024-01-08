<template>
    <div class="grid justify-items-center w-full h-full">
        <NuxtLink :to="`games/${game.id}`" class="btn-game"><img
            :src="game.img"
            loading="lazy"
            title="click for details"
            class="h-[220px] w-[350px] border-solid border-white border-2"></NuxtLink>
        <div class="pt-1 text-white z-10">{{ game.name }}</div>
    </div>
</template>

<script setup>
const { game } = defineProps(['game'])
</script>

<style>

</style>
