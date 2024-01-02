<template>
    <div class="shadow-lg bg-white; pl-5 pt-4 pb-4 flex gap-5 round">
        <div class="flex container gap-5">
            <NuxtLink to="/" class="btn">home page</NuxtLink>
            <NuxtLink to="/about" class="btn">about page</NuxtLink>
            <NuxtLink to="/games" class="btn">games page</NuxtLink>
            <NuxtLink to="/love" class="btn">love page</NuxtLink>
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