import Router from 'express';

const router = Router();

let clients = [
  { id: 3, nome: 'Alessandro 3', telefone: '14333333333' },
  { id: 1, nome: 'Alessandro 1', telefone: '14111111111' },
  { id: 2, nome: 'Alessandro 2', telefone: '14222222222' },
  { id: 4, nome: 'Alessandro 4', telefone: '14444444444' },
  
];

router.get('/clients', (request, response) => response.json(clients));

/**
 * Buscar um único recurso
 */

router.get('/clients/:id', (request, response) => {
  const { id } = request.params;
  const client = clients.find(value => value.id == id);

  if(client == undefined) {
    response.status(400).json({ error: "Requisição inválida" });
  } else {
    response.status(200).json(client);
  }
});

/**
 * Inserir dados no servidor - BD
 */

router.post('/clients', (request, response) => {
  // request.body => quer o corpo da requisição
  const client = request.body;
  clients.push(client);

  response.status(201).json(client);
})

/**
 * Atualizar nome de clientes
 */

router.put('/clients/:id', (request, response) => {
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

router.delete('/clients/:id', (request, response) => {
  const { id } = request.params;
  const index = clients.findIndex(value => value.id == id);

  if (index == -1) {
    response.status(400).send();
  } else {
    clients.splice(index, 1);
    response.status(204).send();
  }
});

export { router };

