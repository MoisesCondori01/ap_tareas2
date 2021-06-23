const tareas = require('./tareas');
const process = require('process');

//Anteriormente  se dio cierta funcionalidad pero ahora vamos a poder interactuar con nuestro
//moluloTareas
//Para eso vamos a hacer una consola de operaciones
//Con una estructura switch
//Switch me permite,si una variable toma ciertos valores, y segun que valor tome
//  realizar lo que esta dentro de cada metodo
//Par eso usamos la constante PROCESS
//PROCESS me permite manipular o captar datos desde la CONSOLA------
//Y usamos particulamente una propiedad de PROCESS llamada "argv"
//ARGV le da un poco de dinamismo osea para no estar harcodeando el codigo
//Se usa mas adelante en el "DEPLOY"

switch (process.argv[2]) {//tambien se puede hacer -----const comando = process.argv[2]
    case "listar":
        tareas.listarTareas()
        //console.log(tareas.listarTareas())
        break;
    case undefined:
        console.log("Atencion -Tienes que pasar alguna accion");
        break
    case 'agregar':
        console.log(tareas.agregarTarea(process.argv[3]))
        break
    case 'filtrar':
        if(tareas.filtrarTareas(process.argv[3]).length == 0){  // if ternario/Si al aplicar length al array nos,
            console.log('No hay resultados para tu búsqueda'); //devuelve un array vacio ,nos dira...
        }else{
            console.log(tareas.filtrarTareas(process.argv[3]));//de lo contrario mostrara lo que ingresamos por consola
        }
        break
    case 'cambiar':
        console.log(tareas.cambiarEstado(process.argv[3],process.argv[4]))
        break
    default:
        console.log("No entiendo lo que quieres hacer");
        break;
}


