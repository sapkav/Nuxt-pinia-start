<template>
  <div class="bg-[#f1f1f1]" style="min-height: calc(100vh - 64px)">
    <pop-up-city
      v-if="isCity"
      @closePopUp="closePopUp"
      />
    <section class="weather-header">
      <h1 style="font-size: 20px; font-weight: 700; padding-left: 5px;">Мониторинг погоды в разных городах</h1>
      <div style="display: flex; position: relative;">
        <label for="weather" style="margin-right: 5px;">Поиск: </label>
        <input type="search" v-model="searchValue" id="weather" class="padding-left: 5px">
        <button @click="cityAdding" class="weather-header-btn">Add city</button>
      </div>
    </section>
    <div class="flex">
      <div class="grid overflow-auto h-[calc(100vh-100px)]" style="grid-template-columns: repeat(auto-fit, minmax(300px, 330px)); justify-content: space-around; width: 100%;">
        <div v-for="item in nowCitys" :key="item">
          <WeatherCard 
            :city="item"
            @deleteTown="deleteTown"
            @checkDetails="checkDetails"
            />
        </div>
      </div>
      <div style="width: 500px;" class="grid overflow-auto h-[calc(100vh-100px)]" v-if="isDetails">
        <weather-detail
          :city="choosedCity"
          :key="choosedCity"
          @closeDetails="closeDetails"
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
    closeDetails() {
      this.isDetails = false;
    },
    clearInput() {
      this.searchValue = ''
    },
    closePopUp() {
      this.isCity = false;
    },
    checkDetails(val) {
      this.choosedCity = val;
      if (!this.isDetails) this.isDetails = true;
    },
    async test() {
      const json = JSON.stringify(this.nowCitys);
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

input[type='search'] {
  outline-offset: 0px !important;
  padding-left: 2px;
}
.weather-header {
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-btn {
    background-color: rgb(214, 187, 187);
    color: rgb(49, 26, 26);
    padding: 0px 5px;
    margin: 0 10px 0px 20px;
  }

  &-delete {
    width: 12px;
    height: 12px;
    margin-top: 6px;
    margin-left: 3px;
    cursor: pointer;
    position: absolute;
    right: 103px;
  }
}
</style>