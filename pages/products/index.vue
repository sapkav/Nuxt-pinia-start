<template>
    <div class="border-solid pl-5 text-xl">
        <h1>product page</h1>
        <NuxtLink to="/" class="border-solid border-2 rounded pt-px pb-px pl-1 pr-1 border-slate-300 shadow-lg blur-sm">Home page</NuxtLink>
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
