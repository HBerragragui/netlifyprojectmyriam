<template>
    <div>
        <h1>Résultats de recherche</h1>
        <v-data-table v-if="botanicDatas" :headers="headers" :items="botanicDatas" :search="search"></v-data-table>
    </div>
</template>

<script>
//import Mock from "../mock/trefle.json";

import { useMyStore } from '../store/store.js';
import { mapState } from 'pinia';
import axios from 'axios';

export default {
    data() {
        const trefleStore = useMyStore();
        
        return {
            search: '',
            headers: [
                { key: 'id', title: 'Id' },
                { key: 'common_name', title: 'Nom Commun' },
                { key: 'scientific_name', title: 'Nom scientifique' },
                { key: 'year', title: 'Année' },
                { key: 'bibliography', title: 'Bibliographie' },
            ],
            setBotanicDatas: trefleStore.setBotanicDatas
        }
    },
    computed: {
        ...mapState(useMyStore, ['botanicDatas'])
    },
    mounted() {

        //this.botanicDatas = Mock.data;
        
        let _vm = this;
        
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
}
</script>