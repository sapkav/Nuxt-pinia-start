<template>
    <div class="pl-3">
        <h1 class="underline">About page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const counter = reactive([1,32,45,94])
</script>