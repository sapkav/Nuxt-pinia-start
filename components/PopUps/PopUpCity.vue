<template>
  <div style="color: black">
    <div class="gray-bg"></div>
    <div class="popup-city">
      <DraggableResizableVue
      :draggable="isDraggable"
      :resizable="false">
        <div class="popup-city-window">
          <div class="popup-city-window_flex">
            <div>Выберите город для мониторинга</div>
            <img src="@/assets/img/closeBlack.png" alt="clsoe-button" style="cursor: pointer; height: 12px; width: 12px; margin: 6px 2px 0px 0px;" @click="$emit('closePopUp')">
          </div>
          <div ref="table" style="height: 535px;" @mouseover="isDraggable = false" @mouseleave="isDraggable = true"></div>
          <div class="popup-city-window_flexEnd">
            <button class="button-style" style="margin-right: 5px;" :disabled="true" @click="addCity">Выбрать</button>
            <button class="button-style" @click="$emit('closePopUp')">Закрыть</button>
          </div>  
        </div>
      </DraggableResizableVue>
    </div>
  </div>
</template>

<script>
import DraggableResizableVue from 'draggable-resizable-vue3'
import axios from 'axios'
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import {ref, reactive, onMounted} from 'vue';

export default {
  name: 'PopUpCity',
  components: {
    DraggableResizableVue,
  },
  async setup() {
    const table = ref(null);
    const tabulator = ref(null);
    const choosedCity = ref('');
    const isDraggable = ref(true);

    onMounted(async () => {
      const data = ((await axios('http://localhost:3004/allCities')).data);
      console.log(data);
      tabulator.value = new Tabulator(table.value, {
        data: data,
        reactiveData:true,
        columns: [
          {
            title: 'Регион',
            field: 'admin_name',
            width: 186,
            resizable: false,
            headerFilter: true,
          },
          {
            title: 'Город',
            field: 'city',
            width: 186,
            resizable: false,
            headerFilter: true,
          },
          {
            title: 'Население',
            field: 'population',
            headerFilter: true,
            resizable: false,
          }
        ], //define table columns
      });
    })

    return{tabulator, table, choosedCity, isDraggable};
  },
  emits: ['closePopUp'],
  methods: {
    rowClicked(event) {
      this.choosedCity = event.city;
    },
    addCity() {
      
    },
  }
}
</script>

<style lang="scss">
@import "tabulator-tables";

.tabulator-header-filter {
  height: 20px !important;
  input {
    height: 20px;
  }
}

.vtl-tbody-td {
  height: 10px !important;
}

.popup-city {
  height: calc(100vh - 64px);
  width: 100vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  &-window {
    width: 500px;
    height: 600px;
    background-color: white;

    &_flex {
      display: flex;
      justify-content: space-between;
      padding: 2px 5px;
      cursor: move;
      border-bottom: 1px solid black;
    }

    &_flexEnd {
      display: flex;
      justify-content: flex-end;
      padding: 5px 5px 0px 5px;
    }
  }
}
</style>