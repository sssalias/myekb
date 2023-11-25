import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import {createPinia} from "pinia";
import BaseTitle from "@/components/BaseTitle.vue";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import icons from "@/components/icons"

icons.forEach(icon => {
    library.add(icon)
})

const app = createApp(App)
    .use(router)
    .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('BaseTitle', BaseTitle)
    .component('DataTable', Vue3EasyDataTable)
    .mount('#app')

