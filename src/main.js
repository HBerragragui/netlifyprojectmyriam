import './assets/main.css';
import { createApp } from 'vue';
import authConfig from "../auth_config.json";
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { createAuth0 } from "@auth0/auth0-vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(createPinia());
app.use(createAuth0({
    domain: "dev-w0p0na7ozmijvcl5.us.auth0.com",
    clientId: "sKQguG8GoMM5SjWfKV57myejRCeOLPtP",
    authorizationParams: {
    redirect_uri: window.location.origin,
    }
}));

app.mount('#app')
