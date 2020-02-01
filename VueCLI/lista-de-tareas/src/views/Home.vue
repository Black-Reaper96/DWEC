<template>
  <v-container grid-list-xl>
    <v-layout row wrap>

      <v-flex md6>
        <v-card class="mb-3 pa-4" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip
              class="mb-2"
              color="pink"
              label
              text-color="white"
            >
              <v-icon left>label</v-icon>
              {{item.titulo}}
            </v-chip>
            <p>{{item.descripcion}}</p>
          </v-card-text>
          <v-btn color="warning" class="ml-4" @click="editar(index)">Editar</v-btn>
          <v-btn color="error" class="ml-3" @click="eliminarTarea(item.id)">Eliminar</v-btn>
        </v-card>

      </v-flex>

      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
            <v-btn block class="success" type="submit"> Agregar tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
            <v-btn block class="warning" type="submit"> Editar tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>

    <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

  </v-container>
</template>

<script>

export default {
  name: 'home',

  data(){
    return{
      listaTareas:[],
      titulo: '',
      descripcion: '',
      snackbar: false,
      mensaje: '',
      formAgregar: true,
      indexTarea: ''

    }
  },

  methods:{
    agregarTarea(){
      if(this.titulo == '' || this.descripcion == ''){
        this.snackbar = true
        this.mensaje = 'Llena todos los campos!!!'
      }else{
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion
        })
        this.titulo = '',
        this.descripcion = ''
        this.snackbar = true
        this.mensaje='Tarea agregada con exito'
        localStorage.setItem('loglevel:webpack-dev-server', JSON.stringify(this.listaTareas));
      }
    },
    eliminarTarea(id){
      this.listaTareas = this.listaTareas.filter(e => e.id != id)
      this.snackbar = true
        this.mensaje='Tarea eliminada con exito con exito'
        localStorage.setItem('loglevel:webpack-dev-server', JSON.stringify(this.listaTareas));
    },
    editar(index){
      this.formAgregar = false
      this.titulo = this.listaTareas[index].titulo
      this.descripcion = this.listaTareas[index].descripcion
      this.indexTarea = index
    },
    editarTarea(){
        this.listaTareas[this.indexTarea].titulo = this.titulo
        this.listaTareas[this.indexTarea].descripcion = this.descripcion
        this.formAgregar = true
        this.titulo = '',
        this.descripcion = ''
        this.snackbar = true
        this.mensaje='Tarea editada con exito'
        localStorage.setItem('loglevel:webpack-dev-server', JSON.stringify(this.listaTareas));
    }
  },
  created: function(){
        let datosDB = JSON.parse(localStorage.getItem('loglevel:webpack-dev-server'));
        if(datosDB == null){
            this.listaTareas=[];
        }else{
            this.listaTareas=datosDB;
        }

    }
}
</script>
