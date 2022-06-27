const app = require('express')();

//const app = express();


const clients = [
  { id: 3, nome: 'Alessandro 3', telefone: '14333333333' },
  { id: 1, nome: 'Alessandro 1', telefone: '14111111111' },
  { id: 2, nome: 'Alessandro 2', telefone: '14222222222' },
  { id: 4, nome: 'Alessandro 4', telefone: '14444444444' },
  
];

// Request: Tudo que o cliente está mandando vem por essa requisição (ele trás coisas do cliente)
// Reponse: Tudo que o servidor responde vai por esse objeto, é a resposta do servidor

// Retorno de todos os clientes em uma linha só

app.get('/clients', (request, response) => response.json(clients));

//app.get('/clients', (request, response) => {
//  response.json(clients);
//})


app.listen(3000);