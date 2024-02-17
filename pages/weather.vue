<template>
  <div class="bg-[#f1f1f1]" style="min-height: calc(100vh - 64px)">
    <pop-up-city
      v-if="isCity"
      @closePopUp="closePopUp"
      />
    <div class="weather-header">
      Мониторинг погоды в разных городах <button @click="test">test</button>
      <input type="text" v-model="searchValue">
      <button @click="cityAdding">Добавить город</button>
    </div>
    <div class="flex">
      <div class="grid overflow-auto h-[calc(100vh-130px)]" style="grid-template-columns: repeat(auto-fit, minmax(300px, 330px)); justify-content: space-around; width: 100%;">
        <div v-for="item in nowCitys" :key="item">
          <WeatherCard 
            :city="item"
            @deleteTown="deleteTown"
            @checkDetails="checkDetails"
            />
        </div>
      </div>
      <div style="width: 500px;" class="grid overflow-auto h-[calc(100vh-130px)]" v-if="isDetails">
        <weather-detail
          :city="choosedCity"
          :key="choosedCity"
          />
      </div>
    </div>
  </div>
</template>

<script>
import PopUpCity from '~/components/PopUps/PopUpCity.vue';
import WeatherCard from '~/components/weather/weatherCard.vue';
import WeatherDetail from '~/components/weather/weatherDetail.vue';
import { useCityStore } from '~/store'
import axios from 'axios'

export default {
  components: { PopUpCity, WeatherCard, WeatherDetail },
  name: 'weather',
  async setup() {
    const cityStore = useCityStore();
    await cityStore.getCitys();
    let searchValue = ref('');
    let nowCitys = ref(cityStore.citys.slice(0));
    let isCity = ref(false);
    const isDetails = ref(false);
    const choosedCity = ref('');

    const cityAdding = () => {
      isCity.value = true;
    }

    return {
      searchValue,
      cityStore,
      nowCitys,
      isCity,
      cityAdding,
      isDetails,
      choosedCity,
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
    checkDetails(val) {
      this.choosedCity = val;
      //this.isDetails = !this.isDetails;
      if (!this.isDetails) this.isDetails = true;
    },
    async test() {
      const json = JSON.stringify(this.nowCitys);
      // const res = await axios.post('http://localhost:3004/citys', json, {
      //   headers: {
      //     // Overwrite Axios's automatically set Content-Type
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const response = await fetch('http://localhost:3004/citys', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: json
      // })
      // return response.json()
      axios.post('http://localhost:3004/citys', json).then(resp => {
          console.log(resp.data);
      }).catch(error => {
          console.log(error);
      });
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