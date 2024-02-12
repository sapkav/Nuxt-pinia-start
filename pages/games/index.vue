<template>
    <div class="border-solid pl-5 text-xl bg-slate-900 p-6" style="min-height: calc(100vh - 64px)">
        <Preloader v-if="gameStore.loading" />
        <div class="grid grid-cols-4 justify-center gap-10 product_item">
            <div v-for="item in gameStore.games" :key="item" class="justify-center grid pt-2 h-[240px]">
                <GameCard :game="item" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useGamesStore } from '~/store'
import { defineComponent, ref } from "vue"
import Preloader from '~/components/Preloader.vue';

export default defineComponent({
    components: { Preloader },
    name: "Products",
    async setup() {
        //https://steamcommunity.com/id/vanya7685/inventory/json/730/2  32D3B699D8FB4185C8E5F30121756603 vanya7685
        const gameStore = useGamesStore();
        await gameStore.getGames();

        return {
            gameStore
        }
    }
});        
</script>
