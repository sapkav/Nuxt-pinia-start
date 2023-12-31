<template>
    <div>
        Product fo id: {{ id }}
        <button><NuxtLink to="/products">to katalog</NuxtLink></button>
    </div>
</template>

<script setup>
    console.log(useRoute())
    const { id } = useRoute().params;
</script>

<style>

</style>