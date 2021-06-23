const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./tareas.json','utf-8'));
//tareas esta declarada en forma GLOBAL para que se pueda acceder a ella desde
// moduloTareas

const moduloTareas = { //Se crea una constante que contiene un O.literal .Porque
    //Porque es comodo,Versatil.Cadad una de las propiedades las convieto en metodos

 //LA MEJOR MANERA DE MODULARIZAR ES HACIENDOLO EN UN OBJETO LITERAL
 
 
//   Ya que js me da la facilidad de tener metodos dentro de o.literales.Eto me sirve 
//para exportar solo el o.literal y dentro los metodos
    listarTareas : () => tareas.forEach(tarea => {   //SE utiliza forEach para iterar el contenido del array de objeto liteal
                                                     //del ""JSON"
                   console.log(`Titulo : ${tarea.titulo}      -      Estado => ${tarea.estado}`);
                                                 }),// -------------------------->Traigo el titulo desde app.js

    //--------------------------------------------------------------
    agregarTarea : titulo =>{        //      /      //
        let tarea = {
            id : tareas.length + 1,              //
            titulo,
            estado : "pendiente",//Por defecto   //---------->  ARMO MI OBJETO LITERAL/.--Esta tarea es la que
                                                            //despues voy a pushear en tareas
            aprobado : false//Por defecto
        }
        tareas.push(tarea)                      // -------->-pushear en tareas
        moduloTareas.guardarJSON(tareas)        //--------->guardar en JSON
        return "Tarea guardada"    //       /     //
    },

    guardarJSON : tareas =>  fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2),'utf-8'),//Se cambia "guardarJSON" por "escribirJSON"

    filtrarTareas : estado => tareas.filter(tarea => tarea.estado == estado),
    // El metodo "filtrarTareas "va a recibir "estado"como parametro,como criterio por el cual se va a filtrar
    //al o.lieteral "tareas" le voy a aplicar filter.
    //filter recibe un callback ,donde cada uno de sus elementos es una "tarea" y esto me va a devolver la tarea
    //cuyo estado sea igual al estado que le estoy pasando como parametro
        cambiarEstado : (filtro, nuevoEstado) => {

        let Tarea = function(titulo, estado){    //Se crea un molde para crear objetos literales
            this.titulo = titulo                 //
            this.estado = estado                 //
        }
        // .map :devuelve un array modificado segun el criterio que se elija
        let tareasActualizadas = tareas.map(tarea => {
             // .toLowerCase : lo escrito en mayuscula lo lee como minuscula para poder leerlo
            if(tarea.titulo.toLowerCase().includes(filtro.toLowerCase())){  //Si la tarea cuyo titulo uncluye
                                                    // el filtro que le estoy pasando por parametro,entoces me
                                                    //cambiara el estado de esa tarea ,por el nuevo estado
                                                    //que le estoy pasando por parametro
                tarea.estado = nuevoEstado // de esa tarea se le cambiara el estado
                //En caso que no coincida el filtro  que le estoy pasando,se va a guardar con el estado
                //que le corresponde
            }
            return new Tarea(tarea.titulo,tarea.estado)//retornara la instancia del objeto que acabo de crear
        })
        moduloTareas.guardarJSON(tareasActualizadas)

        return moduloTareas.listarTareas();
        
    }
}

module.exports = moduloTareas;

























/* replace : function(filtro,nuevoEstado){

    let Tarea = function(titulo, estado){
        this.titulo = titulo,
        this.estado = estado
    }
    let tareasActualizadas = tareas.map(tarea => {

        if(tarea.titulo.includes(filtro)){
            tarea.estado = nuevoEstado
        }
        return new Tarea(tarea.titulo, tarea.estado)
    })

    return console.log(tareasActualizadas)
} */
