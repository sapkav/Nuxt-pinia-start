<template>
  <div class="start-main">
    <swiper :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules">
      <swiper-slide v-for="item in projects" :key="item.id">
        <div class="start-main-slide">
          <img src="@/assets/img/wordle.png" style="height: 30vh">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      
      const projects = [
        {id: 0, title: 'Weather', description: 'Project with weather details for different cities. U can add new city or delete one of present for default'},
        {id: 1, title: 'Games', description: 'List of games where u can fall inside the choosed and see the details about the her'},
        {id: 2, title: '5 Words', description: 'Game "Wordle"'},
        {id: 3, title: 'Fitness', description: 'Fitness bla-bla-bla'},
        {id: 4, title: 'Fitness', description: 'Fitness bla-bla-bla'}
      ]

      return {
        onSwiper,
        onSlideChange,
        projects,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style lang="scss" scoped>
/* .project-style {
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
} */
.start-main {
  font-size: 40px;
  background-color: rgb(255, 255, 255);

  &-slide {
    display: flex;
    align-items: center;
    height: calc(100vh - 64px);
    width: 20vw;
    margin: 0 auto;
    position: relative;
  }
}
</style>

<!-- this.projects = [
{id: 0, title: 'Weather', description: 'Project with weather details for different cities. U can add new city or delete one of present for default'},
{id: 1, title: 'Games', description: 'List of games where u can fall inside the choosed and see the details about the her'},
{id: 2, title: '5 Words', description: 'Game "Wordle"'}
] -->