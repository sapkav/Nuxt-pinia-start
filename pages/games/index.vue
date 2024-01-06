<template>
    <div class="border-solid pl-5 text-xl bg-slate-900 min-h-full p-6" style="height: auto">
        <Preloader v-if="gameStore.loading" />
        <div class="grid grid-cols-4 justify-center gap-10 product_item">
            <div v-for="item in gameStore.games" :key="item" class="justify-center grid pt-2 h-[300px]">
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
        const gameStore = useGamesStore();
        await gameStore.getGames();

        return {
            gameStore
        }
    }
});        
</script>
