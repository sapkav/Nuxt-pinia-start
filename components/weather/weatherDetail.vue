<template>
  <div>
    <div>{{ city }}</div>
    <div v-for="item in weatherDay" :key="item.hour">
      <div>
        <div>{{ item.time }}:</div>
        <section class="flex">
          <div>
            <img width="80" :src="`https:${item.condition.icon}`">
          </div>
          <div style="text-align: center; font-size: 16px">
            <div class="text-2xl">{{ item.feelslike_c }}°</div>
            <div>{{item.condition.text}}</div>
          </div>
          <div class="grid justify-items-center" title="Скорость ветра">
            <img width="32" src="@/assets/img/wind-black.png">
            <div>{{ item.wind_speed }} м/c</div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import axios from 'axios'

export default {
  name: 'weatherDetauil',
  props: {
    city: {
      type: String,
      default: '',
    }
  },
  async setup(props) {
    const token = '7609a460cf7a453f8b2115143240801';
    const weatherDay = (await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${token}&q=${props.city}&lang=ru&days=1&aqi=no&alerts=no`)).data.forecast.forecastday[0].hour;
    weatherDay.forEach(element => {
      element.wind_speed = (element.wind_kph * 0.2778).toFixed(1)
    });

    const mlToKm = computed((val) => {
      return (val * 0.2778).toFixed(1);
    })
    
    return {
      weatherDay,
      mlToKm,
    }
  },
}
</script>

<style>

</style>