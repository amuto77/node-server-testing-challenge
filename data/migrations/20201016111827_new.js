
exports.up = function(knex) {
    return knex.schema.createTable('Emperors',(table)=>{
      table.increments('id'),
      table.string('name').unique().index()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Emperors')
  };