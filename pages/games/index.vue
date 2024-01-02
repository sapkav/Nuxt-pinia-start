<template>
    <div class="border-solid pl-5 text-xl">
        <Preloader v-if="gameStore.loading" />
        <div class="grid grid-cols-4 justify-center pt-1 gap-5 product_item">
            <div v-for="item in gameStore.games" :key="item" class="justify-center grid pt-2">
                <div class="grid justify-items-center ">
                    <img src="@/assets/img/dota.jpg" class="w-9/12 max-w-80">
                    <button class="pt-1">{{ item.name }}</button>
                </div>
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
