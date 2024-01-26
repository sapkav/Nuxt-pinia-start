<template>
    <div class="shadow-lg bg-white pl-5 pt-4 pb-4 gap-5 round flex">
        <div class="flex container gap-5 w-full">
            <NuxtLink to="/" class="btn">Home</NuxtLink>
            <NuxtLink to="/weather" class="btn">Weather</NuxtLink>
            <NuxtLink to="/games" class="btn">Games</NuxtLink>
            <NuxtLink to="/words" class="btn">5 Words</NuxtLink>
            <NuxtLink to="/fitness" class="btn">Fitness</NuxtLink>
        </div>
        <div class="container mx-auto p-4 text-blue-700">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style>
</style>