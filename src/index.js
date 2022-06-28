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

// criação do primeiro middleware - log

function log(request, response, next) {
  const { url, method } = request;
  console.log(`${method} - ${url} at ${new Date()}`)

  // sem o next ele trava a aplicação no método, então precisa continuar
  return next()
}

/**
 * Para que o middleware seja processado em alguns metodos,
 * precisa comentar o app.use(logs) e colocar ele na rota
 */

app.use(log);

// Request: Tudo que o cliente está mandando vem por essa requisição (ele trás coisas do cliente)
// Reponse: Tudo que o servidor responde vai por esse objeto, é a resposta do servidor

// Retorno de todos os clientes em uma linha só

app.get('/clients', (request, response) => response.json(clients));

/**
 * Buscar um único recurso
 */

app.get('/clients/:id', (request, response) => {
  const { id } = request.params;
  const client = clients.find(value => value.id == id);

  if(client == undefined) {
    response.status(400).json({ error: "Requisição inválida" });
  } else {
    response.status(200).json(client);
  }
  //const client = clients.filter(value => value.id == request.params.id)
  //response.json(client);
});

/**
 * Inserir dados no servidor - BD
 */

app.post('/clients', (request, response) => {
  // request.body => quer o corpo da requisição
  const client = request.body;
  clients.push(client);

  response.status(201).json(client);
})

/**
 * Atualizar nome de clientes
 */

app.put('/clients/:id', (request, response) => {
  const id = request.params.id;
  const nome = request.body.nome;

  let client = clients.find(value => value.id == id);
  
  if(client == undefined) {
    response.status(400).send();
  } else {
    client.nome = nome;
    response.status(200).json(client);
  }
});

/**
 * DELETE
 */

app.delete('/clients/:id', (request, response) => {
  const { id } = request.params;
  const index = clients.findIndex(value => value.id == id);

  if (index == -1) {
    response.status(400).send();
  } else {
    clients.splice(index, 1);
    response.status(204).send();
  }
})

app.listen(3000);