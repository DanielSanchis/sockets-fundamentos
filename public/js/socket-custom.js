var socket = io();
//escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexión con el servidor');
});
//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
})

//escucha información
socket.on('enviarMensaje',
    function(mensaje) {
        console.log(mensaje);
    })