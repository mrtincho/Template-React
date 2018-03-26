// Declaro constante para requerir los módulos
const express = require("express"), //Manejo de paquetes
      app = express(),
      bodyParser  = require("body-parser"); //Parseador de json, te parsea el body

app.use(bodyParser.json()); //la app va a usar el modulo de bodyParser
app.use(express.static(__dirname + "/public")); //La app usa una ruta estatica donde se almacena el index, imagenes, etc. 

const users = [
	{
		"nombre": "Martin"
	},
	{
		"nombre": "Tincho"
	}
];

app.get('/api/users',(req, res) => {
	res.json({
		users: users
	});
});



//////////       ENDPOINTS       /////////////
//Endpoint raíz. Invoca al index.html
/*
app.get('/', function(req, res) {
	res.send("Bienvenido al sitio de vuelos");
	console.log('INDEX');
	console.log(__dirname);
});

*/
/*
//////////       API AVANTRIP       /////////////
// GET 
app.get('https://api.avantrip.com/flights-api/v1/flights/roundtrips?from=BUE&to=MIA&departureDate=2018-10-05&returningDate=2018-10-12&adults=1&children=0&infants=0&cabinClass=economy&channel=desktop&portal=avantrip&clientKey=677cda70d0aaa315b98f', function (req, res) {
        //bookModel.find(function(err, bookModel) {
					//Si hay error devuelvo status code 500
    	if(err) res.send(500, err.message);
					//Si no hay error devuelvo 200 OK con el body del JSON
			//res.status(200).jsonp(bookModel);
      res.status(200).jsonp(body);
			console.log('GET /books')
    });
});

*/


// Inicio el server
app.listen(3000, function() {
  console.log("Node server corriendo en http://localhost:3000");
  console.log("o en https://Viajeros-mcesarini969211.codeanyapp.com/");
});