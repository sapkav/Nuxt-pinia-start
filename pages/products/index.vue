<template>
    <div class="border-solid pl-5 text-xl">
        <h1>product page</h1>
        <NuxtLink to="/" class="border-solid border-2 rounded pt-px pb-px pl-1 pr-1 border-slate-300 shadow-lg ">Home page</NuxtLink>
        <div v-for="item in counters" :key="item">
            <div>
                <!-- <NuxtLink :to="'products/' + item.line">{{ item.line }}</NuxtLink> -->
                <button class="pr-2" @click="dbl(item.count)">{{ item.count }}</button>
                <button @click="inc(item.count)">{{ item.name }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/store'

const store = useCounterStore();
const { counters } = storeToRefs(store);
console.log(counters)

function dbl(value: number) {
    console.log(store.doubleCount(value));
}

function inc(value) {
    store.increment(value);
}
</script>
