import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {RestController} from './services/RestController'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const APP = createApp(App)
                .use(store)
                .use(router)
                .use(VueAxios, axios)
                .mount('#app')
                
export const RESTCONTROLLER = new RestController('http://localhost:9080');

/**
 * BOOTSTRAP (Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites)
 * npm install bootstrap jquery popper.js
 * Dann in main.ts folgendes einfügen: 
 *  import 'bootstrap'
 * import 'bootstrap/dist/css/bootstrap.min.css'
 * 
 * AXIOS (Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API)
 * npm install --save axios vue-axios
 * in main.ts müssen folgende Sachen eingefügt werden: 
 * import axios from 'axios'
 * import VueAxios from 'vue-axios'
 *  export const app = createApp(App).use(VueAxios, axios)
 * 
 * SPARKSON (Sparkson is a JSON parsing and validation library for TypeScript. It's primary goal is to ensure that payloads of REST APIs fulfill the promised contracts. It provides a declarative interface based on decorators to specify the parsing and validation rules.)
 * npm i sparkson
 * Example use in class: ResponseResult.ts (official documentation: https://www.npmjs.com/package/sparkson)
 */

