
<template>
    <div>
        <h1>Test Page Vue3 JS</h1>
        <!-- <Home/> -->
        <p>Count : {{ count }}</p>
        <v-btn @click="increment">+</v-btn>
        <v-btn @click="decrement">-</v-btn>
    </div>
</template>

<script>
//import Home from '../components/home.vue';
import { useMyStore } from '../store/store.js';
import { mapState } from 'pinia';

export default {
    data() {
        const trefleStore = useMyStore();
        return {
            increment: trefleStore.increment,
            decrement: trefleStore.decrement,
        }
    },
    computed: {
        ...mapState(useMyStore, ['count'])
    }
}
</script>
