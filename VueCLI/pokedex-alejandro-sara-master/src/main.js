import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNyBuLkaQsk2snF_Yh1F2caKnfQfTRYqw",
    authDomain: "pokemon-pokedex-9793c.firebaseapp.com",
    databaseURL: "https://pokemon-pokedex-9793c.firebaseio.com",
    projectId: "pokemon-pokedex-9793c",
    storageBucket: "pokemon-pokedex-9793c.appspot.com",
    messagingSenderId: "530661035273",
    appId: "1:530661035273:web:f9243fbbd00e8dd369d7d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  components: { App },
  template: "<App/>"
}).$mount('#app')
