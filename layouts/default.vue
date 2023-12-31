<template>
    <div>
        <h1>Mian blyqa page</h1>
        <div><NuxtLink to="/about">about page</NuxtLink></div>
        <NuxtLink to="/products">products page</NuxtLink>

        <div>
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