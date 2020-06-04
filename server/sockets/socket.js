const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('Usuario conectado ');

    //enviar mensaje
    cliente.emit('enviarMensaje', { usuario: 'administrador', mensaje: 'Bienvenido a esta aplicación' });


    cliente.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        cliente.broadcast.emit('enviarMensaje', data);
        /*  if (mensaje.usuario) {
             callback({
                 resp: 'todo salió bien'
             });
         } else {
             callback({
                 resp: 'todo salió mal'
             });
         } */


    });

});