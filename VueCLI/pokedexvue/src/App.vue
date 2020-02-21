<template>
  <v-app>
    <v-app-bar
      app
      color="error"
      dark
    >
<v-app-bar-nav-icon></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
       <v-toolbar-title class="titulo">Pokedex</v-toolbar-title>
       <v-spacer></v-spacer>
 <div class="d-flex" id="iconos">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
             <v-img
          alt="Vue Logo"
          class="shrink mr-2"
          contain
          src="https://cli.vuejs.org/favicon.png"
          transition="scale-transition"
          width="40"
        />
         <v-img
          alt="Firebase Logo"
          class="shrink mr-2"
          contain
          src="https://firebaseopensource.com/logo-small.png"
          transition="scale-transition"
          width="45"
        />
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-simple-table class="text-center">
              <template v-slot:default>
                <thead class="error text-center">
                  <tr>
                    <th class="body-1 font-weight-medium text-center" id="nombre">Number</th>
                    <th class="body-1 font-weight-medium text-center" id="nombre">Icon</th>
                    <th class="body-1 font-weight-medium text-center" id="nombre">Name</th>
                    <th class="body-1 font-weight-medium text-center" id="nombre">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p, index) of pokemons" :key="p.numero">
                    <td>{{p.numero}}</td>
                    <td> <v-img v-bind:src=p.mini height="35" width="38"></v-img></td>
                    <td>{{p.nombre}}</td>
                    <td><v-btn medium color="info" @click="mostrarPokemon(index)">Mostrar</v-btn></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="6">
            <div id="carta">
            <v-card id="fondo" v-if="cartaPokemon"
              class="mx-auto overflow-hidden"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
              width="90%"
              shaped
              outlined
              position="fixed"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1" id="tituloPokemon">{{numero}}# {{name}}</v-list-item-title>
                  <p id="tituloPokemon">{{descripcion}}</p>
                </v-list-item-content>

                <v-img v-bind:src=grande contain height="100" class="ma-0"></v-img>
              </v-list-item>

              <v-list-item>
                <Mapa :loc="localizacionP" :latitud="latitudP" :longitud="longitudP" class="mapa"/>
              </v-list-item>

              <v-card-actions class="space-arround">
                <h3 id="tituloPokemon">Tipo:</h3>
                <v-img contain height="1.75em" v-bind:src=tipo1 class="align-left"></v-img>
                <v-img contain height="1.75em" v-bind:src=tipo2 class="align-left"></v-img>
              </v-card-actions>
            </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="error white--text" height="50">
    <v-spacer></v-spacer>
    <div>&copy; Proyecto basado en Vue CLI, Firebase y Vuetify</div>
  </v-footer>
  </v-app>
</template>

<script>
import { db } from './main'
import Mapa from "./components/Mapa";
import Mapa2 from "./components/MapaImg";

export default {
  name: 'App',

  components: {
    Mapa
  },

  data(){
    return{
    localizacionP: '',
    latitudP: 0,
    longitudP: 0,
    name: '',
    numero: '',
    tipo1: '',
    tipo2: '',
    descripcion: '',
    grande:'',
    pokemons: [],
    cartaPokemon: false
    }
  },

  created(){
      this.getPokemon();
  },
  methods:{
    async getPokemon(){
       try{
          const snapshot = await db.collection('pokemon').get();
          const pokemonsData = [];

          snapshot.forEach(doc =>{
            let pokemon = doc.data();
            pokemonsData.push(pokemon);
            
          })
          pokemonsData.sort(function(a , b){
            return (a.numero - b.numero)
          });
          this.pokemons = pokemonsData;
          

        }catch(error){
          console.error(error);
          
        }
    },
    mostrarPokemon(index){
      this.cartaPokemon=true;
      this.name = this.pokemons[index].nombre;
      this.numero = this.pokemons[index].numero;
      this.tipo1 = this.pokemons[index].tipo1;
      this.tipo2 = this.pokemons[index].tipo2;
      this.descripcion = this.pokemons[index].descripcion;
      this.grande = this.pokemons[index].grande;
      this.localizacionP = this.pokemons[index].localizacion;
      this.latitudP = this.pokemons[index].latitudP;
      this.longitudP = this.pokemons[index].longitudP;

    },
  }
  
};
</script>

<style scoped>
.mapa {
    height: 425px;
}

#carta{
  position: fixed;
  align-self: center;
}

#fondo{
  background: linear-gradient(top, #FF5252, orange);
}

td{
  font-family: 'Inconsolata', monospace;
  font-size: 1.5em!important;
}
#nombre{
  font-family: 'Fira Sans Condensed', sans-serif!important;
  font-weight: 4!important;
  color:white!important;
}
.titulo{
  font-family: 'Righteous', cursive;
  align-self: center;
}
footer{
  font-family: 'Righteous', cursive;
}
#tituloPokemon{
    font-family: 'Fira Sans Condensed', sans-serif!important;
    color: white!important;
}
</style>