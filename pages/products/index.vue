<template>
    <div>
        <h1>product page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <div v-for="item in counter" :key="item">
            <div>
                <NuxtLink :to="'products/' + item">{{ item }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const counter = reactive([1,32,45,94])
</script>
