const database = require('./database-connection');

module.exports = {
  returnFirstItem(arr) {
    return arr[0];
  },
  list() {
    return database('poem');
  },
  read(id) {
    return database('poem')
      .where('id', id)
      .then(this.returnFirstItem);
  },
  create(poem) {
    return database('poem')
      .insert(poem)
      .returning('*')
      .then(this.returnFirstItem);
  },
  update(id, poem) {
    return database('poem')
      .update(poem)
      .where('id', id)
      .returning('*')
      .then(this.returnFirstItem);
  },
  delete(id) {
    return database('poem')
      .delete()
      .where('id', id);
  }
};
