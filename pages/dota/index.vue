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
          <div style="width: 200px; text-align: center;" class="game-segment">
            <span>{{calcTime(item.duration)}}</span>
            <div class="game-segment-kda">
              <div class="game-segment-kda_death" :style="{width: (item.duration/max_duration) * 100 + '%'}"></div>
            </div>
          </div>
          <div style="width: 250px; text-align: center;" class="game-segment">
            <span>{{item.kills}}/{{item.deaths}}/{{item.assists}}</span>
            <div class="game-segment-kda">
              <div class="game-segment-kda_kill" :style="{width: (item.kills/item.sum) * 100 + '%'}"></div>
              <div class="game-segment-kda_death" :style="{width: (item.deaths/item.sum) * 100 + '%'}"></div>
              <div class="game-segment-kda_assist" :style="{width: (item.assists/item.sum) * 100 + '%'}"></div>
            </div>
          </div>
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
    this.max_duration = 0;
    this.games.forEach(item => {
      item.match_result = this.winCheck(item.player_slot, item.radiant_win);
      item.time_ago = this.timeCalc(item.start_time);
      item.sum = item.kills + item.deaths + item.assists;
      if (item.duration > this.max_duration) {
        this.max_duration = item.duration;
      }
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

.game-segment {
  width: 250px;

  &-kda {
    display: flex;
    padding: 0px 10px;

    &_kill {
      background: red;
      height: 4px;
    }

    &_death {
      background: white;
      height: 4px;
    }

    &_assist {
      background: green;
      height: 4px;
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