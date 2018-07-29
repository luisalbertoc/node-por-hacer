const opts = {
    descripcion: {
        alias: "d",
        desc : "Descripción de la tarea por hacer",
        demand: true
    },
    completado: {
        alias: "c",
        default : true,
        desc : "Marca como completado o pendiente la tarea"
    }
};

const argv = require("yargs")
    .command('crear', 'Crear por hacer', opts)
    .command('actualizar','Actualizar una tarea por hacer',opts)
    .command('eliminar','Elimina una tarea por hacer',opts)
    .help()
    .argv;

module.exports = {
    argv
}
