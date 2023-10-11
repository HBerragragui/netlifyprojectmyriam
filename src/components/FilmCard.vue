<script setup>

</script>
<template>
    <v-card  rounded border elevation="0">
        <v-img
            :src="picture"
            :lazy-src="picture"
            aspect-ratio="1"
            min-height="200"
            max-height="200"
            cover
            class="bg-grey-lighten-2">
        </v-img>
        
        <v-card-title>
            <span v-html="showSearch(title)"></span>
        </v-card-title>
        
        <v-card-text>{{description}} , {{note}}, {{outDate}}</v-card-text>


        <v-divider class="mx-4"></v-divider>

        <v-card-title>Castings</v-card-title>

        <v-card-text>
            <v-chip-group>
                <v-chip v-for="(actor, index) in castings" 
                        :key="'al-card-film'+index">
                    {{actor}}
                </v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn icon size="sm">
                <v-icon size="sm" class="my-2">mdi-heart-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon
                   size="sm"
                   color="accent"
                   @click="$router.push({name: 'detailFilm', params: {id : id}})">
                <v-icon size="sm"
                        color="accent"
                        class="my-2"
                        icon="mdi-arrow-right">
                </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapState} from "pinia";
    import {useFilmStore} from "@/store/FilmStore";

    export default {
        props: {
            id: Number,
            note: Number,
            title: String,
            description: String,
            outDate: String,
            castings: Array,
            picture: String
        },
        computed:{
            ...mapState(useFilmStore, {
                s_search: (state) => state.search,
            }),
        },
        methods:{
            showSearch(val) {
                if (!val)
                    return "";
                let reg = new RegExp("(" + this.s_search + ")", "ig");
                val = val.replace(reg, "<span style='background-color:yellow'>$1</span>");
                return val.toString();
            }
        }
    }

</script>
