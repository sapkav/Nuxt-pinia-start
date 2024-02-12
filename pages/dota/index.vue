<template>
  <div class="dotaGames-body">
    <section class="dotaGames-body-header dotaGames-content">
      <div class="flex">
        <img :src="person.avatarmedium">
        <div>
          <div>
            {{ person.personaname }}
          </div>
          <div>
            Дота плюс: {{ person.plus ? 'Да' : 'Нет'}}
          </div>
        </div>
      </div>
    </section>
    <section class="dotaGames-body-matches dotaGames-content">
      <div class="absolute top-[-25px]">Latest matches</div>
      <div class="flex w-[100%]" style="width: 100%">
        <div style="width: 100%; padding-left: 10px;">Hero</div>
        <div style="width: 200px; text-align: center;">Result</div>
        <div style="width: 200px; text-align: center;">Type</div>
        <div style="width: 200px; text-align: center;">Duration</div>
        <div style="width: 200px; text-align: center;">KDA</div>
      </div>
      <div v-for="item in games" :key="item.match_id">
        <div class="flex">
          <div>Hero</div>
          <div>Result</div>
          <div>Type</div>
          <div>Duration</div>
          <div>KDA</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dotaGames',
  async created() {
    this.games = (await axios('https://api.opendota.com/api/players/248754619/matches')).data.slice(0, 15);
    this.person = (await axios('https://api.opendota.com/api/players/248754619')).data.profile;
    console.log(this.games)
  },
  data() {
    return {
      games: [],
      person: [],
    }
  }
}
</script>

<style lang="scss" scoped>
.dotaGames-body {
  background-color: #1c242d;
  height: calc(100vh - 64px);
  color: white;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;

  &-header {
    height: 150px;
  }

  &-matches {
    height: 650px;
    position: relative;
    margin-top: 70px;
  }
}

.dotaGames-content {
  width: 70vw;
  min-width: 300px;
  background-color: green;
}
</style>