// ECMAscript 6 es lo que se va a utilizar

import app from "./app";

app.listen(app.get('port')) //quiero que utilices la configuración 'port' que hemos definido en el app.js


console.log('server on port', app.get('port'));


