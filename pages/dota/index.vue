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
    <section class="dotaGames-body-matches dotaGames-content" v-if="isReady">
      <div class="absolute top-[-25px]">Latest matches</div>
      <div class="flex w-[100%]" style="width: 100%">
        <div style="width: 100%; padding-left: 10px;">Hero</div>
        <div style="width: 250px; text-align: center;">Result</div>
        <div style="width: 250px; text-align: center;">Type</div>
        <div style="width: 200px; text-align: center;">Duration</div>
        <div style="width: 250px; text-align: center;">KDA</div>
      </div>
      <div v-for="item in games" :key="item.match_id" class="dotaGames-body-matches_game">
        <div class="flex">
          <div style="width: 100%; padding-left: 10px;">{{displayHero(item.hero_id).localized_name}} / {{ item.average_rank }}</div>
          <div style="width: 250px; text-align: center; display: grid; justify-content: flex-start;">
            <div :style="item.match_result === 'Победа' ? {color: 'green'} : {color: 'red'}">{{ item.match_result }}</div>
            <div style="font-size: 12px;">{{ item.time_ago }}</div>
          </div>
          <div style="width: 250px; text-align: center;">{{gameModes[item.game_mode].name}}</div>
          <div style="width: 200px; text-align: center;">{{calcTime(item.duration)}}</div>
          <div style="width: 250px; text-align: center;">{{item.kills}}/{{item.deaths}}/{{item.assists}}</div>
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
    console.log(this.games);
    this.games.forEach(item => {
      item.match_result = this.winCheck(item.player_slot, item.radiant_win);
      item.time_ago = this.timeCalc(item.start_time);
    })
    this.person = (await axios('https://api.opendota.com/api/players/248754619')).data.profile;
    console.log(this.person)
    this.gameModes = (await axios('http://localhost:3004/game_modes')).data;
    console.log(this.gameModes)
    this.gameHeroes = (await axios('https://api.opendota.com/api/heroes')).data;
    console.log(this.gameHeroes)
    this.isReady = true;
  },
  data() {
    return {
      games: [],
      person: [],
      isReady: false,
    }
  },
  methods: {
    calcTime(val) {
      return `${Math.floor(val/60)}:${('0' + val%60).slice(-2)}`;
    },
    displayHero(hero_id) {
      return this.gameHeroes.filter(item => item.id == hero_id)[0];
    },
    timeCalc(time) {
      const timeDiff = +String(new Date().getTime()).slice(0, 10) - time;
      if (timeDiff < 3600) {
        return `${timeDiff & 3600} hinutes ago`;
      } else if (timeDiff < 86400) {
        return `${Math.floor(timeDiff / 3600)} hours ago`;
      } else {
        return `${Math.ceil(timeDiff / 86400)} days ago`;
      }
    },
    winCheck(slot, isWin) {
      if (slot < 128 && isWin || slot >= 128 && !isWin) {
        return 'Победа';
      }
      return 'Поражение';
    },
  }
}
</script>

<style lang="scss" scoped>
.dotaGames-body {
  background-color: #1c242d;
  height: calc(100% + 100px);
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-header {
    height: 150px;
  }

  &-matches {
    height: 650px;
    position: relative;
    margin-top: 70px;

    &_game {
      padding: 2px 0;
    }

    &_game:nth-child(2n) {
      background-color: #353f49;
    }

    &_game:nth-child(2n-1) {
      background-color: #2d3741;
    }
  }

  
}

.dotaGames-content {
  width: 70vw;
  min-width: 300px;
  background-color: #242f39;
  padding-bottom: 20px;
}
</style>