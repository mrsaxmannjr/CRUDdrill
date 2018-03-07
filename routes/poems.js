const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get('/', (request, response, next) => {
  queries
    .list()
    .then(poems => {
      response.json({ poems });
    })
    .catch(next);
});

router.get('/:id', (request, response, next) => {
  queries
    .read(request.params.id)
    .then(poem => {
      poem ? response.json({ poem }) : response.sendStatus(404);
    })
    .catch(next);
});

router.post('/', (request, response, next) => {
  queries
    .create(request.body)
    .then(poem => {
      response.status(201).json({ poem });
    })
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(next);
});

router.put('/:id', (request, response, next) => {
  queries
    .update(request.params.id, request.body)
    .then(poem => {
      response.json({ poem });
    })
    .catch(next);
});

module.exports = router;
