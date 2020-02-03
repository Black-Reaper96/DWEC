import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextAreaAutosize from 'vue-textarea-autosize';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWr0DYAkNEw5vryNoDyDNNTqOOT8vGmjk",
  authDomain: "vue-calendario-609b5.firebaseapp.com",
  databaseURL: "https://vue-calendario-609b5.firebaseio.com",
  projectId: "vue-calendario-609b5",
  storageBucket: "vue-calendario-609b5.appspot.com",
  messagingSenderId: "794110440768",
  appId: "1:794110440768:web:53da878f1eeeb8bb7c36a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
