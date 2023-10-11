<template>
    <v-tooltip :text="name" left>
        <template v-slot:activator="{ props }">
            <v-btn icon
                   size="small"
                   v-bind="props"
                   @click="$router.push('/profile')">
                <v-icon icon="mdi-account"></v-icon>
            </v-btn>
        </template>
    </v-tooltip>
    <v-btn icon 
           size="small" 
           href="#" class="mr-3" @click.prevent="logout">
        <v-icon icon="mdi-logout"></v-icon>
    </v-btn>
</template>

<script>
    export default {   
        props: {
            picture: String,
            name: String
        }, 
        methods:{
            logout(){
                this.$emit("logout");
            }
        }
    };
</script>


