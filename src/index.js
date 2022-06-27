const app = require('express')();
const bodyParser = require('body-parser');

//const app = express();

app.use(bodyParser.json());

let clients = [
  { id: 3, nome: 'Alessandro 3', telefone: '14333333333' },
  { id: 1, nome: 'Alessandro 1', telefone: '14111111111' },
  { id: 2, nome: 'Alessandro 2', telefone: '14222222222' },
  { id: 4, nome: 'Alessandro 4', telefone: '14444444444' },
  
];

// Request: Tudo que o cliente está mandando vem por essa requisição (ele trás coisas do cliente)
// Reponse: Tudo que o servidor responde vai por esse objeto, é a resposta do servidor

// Retorno de todos os clientes em uma linha só

app.get('/clients', (request, response) => response.json(clients));

/**
 * Buscar um único recurso
 */

app.get('/clients/:id', (request, response) => {
  const client = clients.filter(value => value.id == request.params.id)
  response.json(client);
});

/**
 * Inserir dados no servidor - BD
 */

app.post('/clients', (request, response) => {
  // request.body => quer o corpo da requisição
  const client = request.body;
  clients.push(client);
  response.json(client);
})

/**
 * Atualizar nome de clientes
 */

app.put('/clients/:id', (request, response) => {
  const id = request.params.id;
  const nome = request.body.nome;

  let client = clients.filter(value => value.id == id);

  client[0].nome = nome;

  response.json(client[0]);
});

/**
 * DELETE
 */

app.delete('/clients/:id', (request, response) => {
  const id = request.params.id;
  clients = clients.filter(value => value.id != id);
  response.json(clients);
})

app.listen(3000);