<template>
  <div>
    bans:
    <div>
      {{ bans }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dotaMatch',
  async setup() {
    const { id } = useRoute().params;
    const bans = ref([]);
    const picks = ref([]);
    onMounted(async () => {
      let data = (await axios(`https://api.opendota.com/api/matches/${id}`)).data;
      data.picks_bans.forEach(item => {
        if (item.is_pick) {
          picks.value.push(item)
        } else {
          bans.value.push(item);
        }
      })
      console.log(bans, picks)
    });
    //console.log(bans);
    return {
      bans,
      picks
    }
  }
}
</script>

<style>

</style>