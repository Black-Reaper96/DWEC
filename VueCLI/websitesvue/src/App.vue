<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <a href="/" class="navbar-brand">Vuejs Firebase Database</a>
    </nav>
    <!--MAIN CONTENT-->
    <div class="container">
      <div class="row mt-5">
        <div class="col sm-4">
          <div class="card">
            <div class="card-header">
              <h3>Agrega un nuevo sitio web</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addWebsite">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="newWebsite.name" placeholder="Name">
                  <input type="text" class="form-control" v-model="newWebsite.autor" placeholder="Author">
                  <input type="text" class="form-control" v-model="newWebsite.url" placeholder="URL">
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col sm-8 text-center">
          <img src="./assets/logo.png">
          <div class="card">
            <div class="card-header">
              <h3>Lista de sitios web</h3>
            </div>
            <div class="card-body">
              <table class="table table-stripped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Autor</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-model="websitesRef" v-for="(w, index) in websitesRef" :key="w.index">
                    <td>
                      <a v-bind:href="w.url" target="_blank">{{w.name}}</a>
                    </td>
                    <td>
                      {{w.autor}}
                    </td>
                    <td>
                      <button class="btn btn-danger">DELETE</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Firebase from 'firebase';
import config from './config.js';
let app = Firebase.initializeApp(config);
let db = app.database();
let websitesRef = db.ref('websites')
console.log(websitesRef)

export default {
  name: 'App',
  firebase:{
    websites: websitesRef
  },
  data(){
    return{
      newWebsite:{
        name: '',
        autor: '',
        url: ''

      },
      websitesRef
    }
  },
  methods:{
    addWebsite(){
      websitesRef.push(this.newWebsite);
      this.newWebsite.name = '';
      this.newWebsite.autor = '';
      this.newWebsite.url = '';
    }
  }

  
}
</script>

<style>
#app {
  
}
</style>
