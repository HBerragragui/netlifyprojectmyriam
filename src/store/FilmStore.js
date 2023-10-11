import {defineStore} from 'pinia';
import client from "@/client/api.client";
export const useFilmStore = defineStore('filmStore', {
    state: () => ({
        search: "",
        status: "loading",
        films: [],
        favoriteFilms: []
    }),
    actions: {
        async getFilms(){
            try {
                this.films = await client.getFilms();
                this.status = "loaded";
            }catch(e){
                console.error(e);
                this.status = "error";
            }
        },
        setSearch(newSearch){
            this.search = newSearch;
        }
    }
});