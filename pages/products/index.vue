<template>
    <div class="border-solid pl-5 text-xl">
        <div v-for="item in gameStore.games" :key="item">
            <div>
                <!-- <NuxtLink :to="'products/' + item.line">{{ item.line }}</NuxtLink> -->
                <button class="pr-2" @click="dbl(item.count)">{{ item.id }}</button>
                <button @click="inc(item.count)">{{ item.name }}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useGamesStore } from '~/store'
import { defineComponent, computed, onMounted } from "vue"

export default defineComponent({
    name: "Products",
    async setup() {
        const gameStore = useGamesStore();
        await gameStore.getGames();

        return {
            gameStore
        }
    }
});        
</script>
