import { createApp } from "vue";
import { createPinia } from "pinia";
import {BootstrapVue3} from "bootstrap-vue-3";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// @ts-ignore

import App from "./App.vue";
import router from "./router";
import './plugins/fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import axiosInstance from "@/plugins/axios";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);
app.component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$http = axiosInstance

app.mount("#app");
