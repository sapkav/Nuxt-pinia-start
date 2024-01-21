<template>
    <div style="height: calc(100vh - 64px)">
        <section class="pt-[20px] h-[100%]">
            <h1 class="text-4xl text-center">Список мини проектиков в этом репозитории:</h1>
            <div class="grid justify-center align-center pt-[30px]">
                <div v-for="item in projects" :key="item.id" class="project-style">
                    <div class="flex">
                        <div class="w-[200px]">
                            <!-- <video-player :options="videoOptions" class="w-[200px] h-[200px]" /> -->
                            video
                        </div>
                        <div>
                            <div class="text-xl">{{ item.id + 1 }}. {{ item.title }}</div>
                            <div>{{ item.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import videojs from 'video.js';

export default {
    name: 'main',
    created() {
        this.projects = [
            {id: 0, title: 'Weather', description: 'Project with weather details for different cities. U can add new city or delete one of present for default'},
            {id: 1, title: 'Games', description: 'List of games where u can fall inside the choosed and see the details about the her'},
            {id: 2, title: '5 Words', description: 'Game "Wordle"'}
        ]
    },
    data() {
        return {
            videoOptions: {
                autoplay: true,
                controls: true,
                sources: [
                {
                    src:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                    type: 'video/mp4'
                }
                ]
            }
        }
    },
}
</script>

<style scoped>
.project-style {
    border: 1px solid black;
    border-radius: 5px;
    width: 60vw;
    height: 100px;
    margin: 10px;
    min-width: 620px;
    transition: all .3s ease-in-out;
}

.project-style:hover {
    transform: scale(1.01);
    border: 2px solid green;
}
</style>