<template>
    <div class="bg-[#f1f1f1]" style="min-height: calc(100vh - 64px)">
        <div class="max-h-[50vh] h-[50vh] grid grid-cols-4 justify-items-center overflow-auto border-b-2 border-gray-600">
            <div v-for="item in cityStore.citys" :key="item">
                <WeatherCard 
                    :city="item"
                    />
            </div>
        </div>
        <div>
            details
        </div>
    </div>
</template>

<script setup>
import { useCityStore } from '~/store'

const cityStore = useCityStore();  
</script>