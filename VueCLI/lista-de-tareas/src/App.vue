<template>
  <v-app>
    <v-card>
    <v-app-bar dark app class="info" src="https://www.tuexperto.com/wp-content/uploads/2017/10/fondo-de-pantalla-paisaje-768x432.jpg" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>App Tareas</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="success mx-3">
        Ingreso
      </v-btn>

      <v-btn class="error">
        Salir
      </v-btn>

    </v-app-bar>
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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return {
      drawer: false
    }
  },
};
</script>
