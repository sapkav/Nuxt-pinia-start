<template>
    <div class="shadow-lg bg-white; pl-5 pt-4 pb-4 flex gap-5 round">
        <div class="flex container gap-5">
            <NuxtLink to="/">home page</NuxtLink>
            <div><NuxtLink to="/about">about page</NuxtLink></div>
            <NuxtLink to="/products" class="btn">products page</NuxtLink>
        </div>
        <div class="container mx-auto p-4 text-blue-700">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.router-link-exact-active {
    color: green;
}
</style>