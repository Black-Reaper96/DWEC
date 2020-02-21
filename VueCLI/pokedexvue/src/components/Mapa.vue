<template>
  <CargarMapa
    :configMapa="configMapa"
    apiKey="AIzaSyDAGo3B2gATg4NSK3EHZD5m2O17HMN0EMc"
  >
 
    <template slot-scope="{ google, map }">
      <Marcadores
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
        :local="loc"
      />
    </template>
 
  </CargarMapa>
 
</template>

<script>
 
  import CargarMapa from "./CargarMapa";
  import Marcadores from "./Marcadores";
  import { configMapa } from "@/constants/configMapa";
  import Vuex from 'vuex'
 
  

 
  export default {
    components: {
      CargarMapa,
      Marcadores
    },

    props:['loc','latitud','longitud'],
 
    data() {
      return {
        markers: [
          {
            id: "0",
            position: { lat: 0, lng: 0},
            title: '',
          }
        ]
      };
    },
 
    computed: {
      configMapa() {
        return {
          ...configMapa,
          center: this.mapCenter
        };
        
      },

 
      mapCenter() {
        return this.markers[0].position;
      }
    },
    methods: {
     pruebaLocal(localiza,lat,long){
        console.log(this.markers[0].title)
        this.markers[0].title = localiza;
        this.markers[0].position.lat = lat;
        this.markers[0].position.lng = long;
        console.log(this.markers[0].title)
      }
    },
    mounted() {
      this.pruebaLocal(this.loc,this.latitud,this.longitud);
    },
  };
  
</script>