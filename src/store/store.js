import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    count: 0,
    botanicDatas: null,
    currentPlant: null
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement(){
        this.count--;
    },
    setBotanicDatas(datas){
        this.botanicDatas = datas;
    },
    setCurrentPlant(plant){
        this.currentPlant = plant;
    }
  },
});