const db = require("../data/config");

module.exports = {
  find,
  insert,
  remove,
};

function find() {
  return db("emperors");
}

function insert(newPhil) {
  return db("emperors").insert(newEmp);
}

function remove(id) {
  return db("emperors").where({ id }).delete();
}