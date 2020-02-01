<template>
  <v-app>
  <v-card>
    <v-toolbar dense class="info">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="success mx-3">
        Ingreso
      </v-btn>

      <v-btn class="error">
        Salir
      </v-btn>

    </v-toolbar>
  </v-card>
  <v-navigation-drawer app v-model="drawer" temporary class="secondary" dark>
    <v-layout mt-4 column align-center>
      <v-flex>
        <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.descargas.com/img/2019/02/Overwatch-icono.webp"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      </v-flex>
      <v-flex>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="head-line">Alejandro Martin</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-flex>
      <v-divider></v-divider>

    </v-layout>
  </v-navigation-drawer>
    
    <v-content>
      <v-container>
        <router-view/>

        <v-dialog
          v-model="loading.estado"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="loading.color"
            dark
          >
            <v-card-text>
              {{loading.titulo}}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'App',

  data(){
    return {
      drawer: false
    }
  },
  computed:{
    ...mapState(['loading'])
  }
};
</script>
