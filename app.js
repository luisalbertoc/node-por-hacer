//const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

console.log(argv._[0]);

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear( argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        let listado = porHacer.getListado();

        console.log("============ Por Hacer ============".green);
        for (let tarea of listado) {
            
            console.log(tarea.descripcion.red);
            console.log(`Estado ${tarea.completado}`.blue);
            
        }
        console.log("===================================".green);

        break;

    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;

    case "eliminar":
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
        break;
    
    default:
        console.log("Comando no reconocido");
        break;
}
