
<template>
    <div>
        <h1>Détails sur la plante</h1>

        <v-card class="mx-auto pa-4" max-width="434" rounded="0">
            {{ currentPlant }}
        </v-card>
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
            plantId: this.$route.params.plantId,
            botanicDatas: trefleStore.botanicDatas,
            currentPlant: trefleStore.currentPlant,
            setCurrentPlant: trefleStore.setCurrentPlant,
            setBotanicDatas: trefleStore.setBotanicDatas
        }
    },
    computed: {
        ...mapState(useMyStore, ['count'])
    },
    mounted() {
        if (!this.botanicDatas) {
            axios({
                method: 'GET',
                url: `https://trefle.io/api/v1/plants?token=vFofOYMiBLQolXay8HkRs0RfnDYNnxtKs3kfzP4lOC4`,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            }).then(function (response) {
                _vm.setBotanicDatas(response.data.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
        this.setCurrentPlant(this.botanicDatas.filter(p => p.Id === plantId));

    },
    mounted() {
        console.log(this.currentPlant);
    }
}
</script>
