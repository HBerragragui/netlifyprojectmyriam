<script setup>
    import {VSkeletonLoader} from 'vuetify/labs/VSkeletonLoader';
    import FilmCard from "@/components/FilmCard.vue";
</script>

<template>
    <div>
        <!-- Chargement -->
        <v-row v-if="s_status === 'loading'">
            <v-col v-for="skeleton in 10"
                   :key="'al-film-skeleton-'+skeleton"
                   :cols="responsive">
                <v-card rounded border elevation="0">
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                </v-card>
            </v-col>
        </v-row>

        <!-- Aucun Film -->
        <v-scroll-x-transition hide-on-leave>
            <v-alert v-if="s_status === 'loaded' && c_filmsFiltered.length === 0">
                Aucun film trouvé :(
            </v-alert>
        </v-scroll-x-transition>


        <!-- Film -->
        <v-scroll-x-transition hide-on-leave>
            <v-row v-if="s_status === 'loaded'">
                <v-col v-for="(film, index) in c_filmsFiltered"
                       :key="'al-film-'+index" :cols="responsive">
                    <film-card :castings="film.castings"
                               :description="film.description"
                               :id="index"
                               :note="film.note"
                               :picture="film.picture"
                               :out-date="film.date"
                               :title="film.title">
                    </film-card>
                </v-col>
            </v-row>
        </v-scroll-x-transition>
    </div>
</template>

<script>
    import {useFilmStore} from "@/store/FilmStore";
    import {mapState} from "pinia";

    export default {
        data() {
            const filmStore = useFilmStore();
            return {
                s_getFilms: filmStore.getFilms
            }
        },
        computed: {
            ...mapState(useFilmStore, {
                s_search: (state) => state.search,
                s_films: (state) => state.films,
                s_status: (state) => state.status,
            }),
            c_filmsFiltered(){
                if(!this.s_search || this.s_search === "")
                    return this.s_films;
                
                return this.s_films.filter(f=> f.title.toLowerCase().includes(this.s_search.toLowerCase()));
            },
            responsive() {
                if (this.$vuetify.display.lgAndUp) {
                    return 3;
                }
                if (this.$vuetify.display.mdAndUp) {
                    return 4;
                }
                if (this.$vuetify.display.xs) {
                    return 12;
                }
                return 6;
            }
        },
        mounted() {
            this.s_getFilms();
        }
    }
</script>