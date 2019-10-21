function Animal(nombre,especie,n_patas,cola){
    this.nombre;
    this.especie;
    this.n_patas;
    this.cola;

    this.getNombre=function(){
        return this.nombre;
    }
    this.setNombre=function(nombre){
        this.nombre=nombre;
    }

    this.getEspecie=function(){
        return this.especie;
    }
    this.setEspecie=function(especie){
        this.especie=especie;
    }

    this.getPatas=function(){
        return this.n_patas;
    }
    this.setPatas=function(n_patas){
        this.n_patas=n_patas;
    }
    
    this.getCola=function(){
        return this.cola;
    }
    this.setCola=function(cola){
        this.cola=cola;
    }

}