<template>
  <div class="bg-[#f1f1f1]" style="min-height: calc(100vh - 64px)">
    <pop-up-city
      v-if="isCity"
      @closePopUp="closePopUp"
      />
    <div class="weather-header">
      Мониторинг погоды в разных городах
      <input type="text" v-model="searchValue">
      <button @click="cityAdding">Добавить город</button>
    </div>
    <div class="max-h-[50vh] h-[50vh] grid overflow-auto" style="grid-template-columns: repeat(auto-fit, minmax(300px, 330px)); justify-content: space-around;">
      <div v-for="item in nowCitys" :key="item">
        <WeatherCard 
          :city="item"
          @deleteTown="deleteTown"
          />
      </div>
    </div>
  </div>
</template>

<script>
import PopUpCity from '~/components/PopUps/PopUpCity.vue';
import { useCityStore } from '~/store'

export default {
  components: { PopUpCity },
  name: 'weather',
  async setup() {
    const cityStore = useCityStore();
    await cityStore.getCitys();
    let searchValue = ref('');
    let nowCitys = ref(cityStore.citys.slice(0));
    let isCity = ref(false);

    const cityAdding = () => {
      isCity.value = true;
    }

    return {
      searchValue,
      cityStore,
      nowCitys,
      isCity,
      cityAdding,
    }
  },
  methods: {
    deleteTown(name) {
      this.nowCitys = this.nowCitys.filter(item => item !== name);
      this.cityStore.deleteCity(name);
    },
    closePopUp() {
      this.isCity = false;
    },
  },
  watch: {
    searchValue() {
      if (this.searchValue == '') {
        this.nowCitys = this.cityStore.citys.slice(0);
      } else {
        this.nowCitys = this.cityStore.citys.filter(item => item.toLowerCase().includes(this.searchValue.toLowerCase()));
      }
    },
  }
}

</script>

<style scoped lang="scss">
.weather-header {
  height: 65px;
  width: 100%;
  background-color: red;
}
</style>