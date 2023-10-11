<script setup>

</script>

<template>
    <div>
        Profile {{user}}
        
        {{count}} {{c_count}}
        
        <v-btn @click="increment">++</v-btn>

        <v-card
            class="mx-auto"
            max-width="434"
            rounded="0">
            <v-avatar
                color="grey"
                size="150"
                rounded="0"
            >
                <v-img cover :src="user.picture"></v-img>
            </v-avatar>
            
                <v-list-item
                    class="text-white"
                    :title="user.name"
                    :subtitle="user.nickname"
                ></v-list-item>
        </v-card>
    </div>
</template>

<script>
    import {useAuth0} from "@auth0/auth0-vue";
    import {useMyStore} from "@/store/MyStore";
    import {mapState} from "pinia";

    export default {
        data() {
            const auth0 = useAuth0();
            const myStore = useMyStore();
             
            return {
                isAuthenticated: auth0.isAuthenticated,
                isLoading: auth0.isLoading,
                user: auth0.user,
                count: myStore.count,
                increment: myStore.increment,
            }
        },
        computed:{
            ...mapState(useMyStore, {
                c_count: (state) => state.count
            })
        }
    }
</script>

<style scoped>

</style>