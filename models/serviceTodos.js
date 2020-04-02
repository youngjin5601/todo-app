const query      = require('./query');

exports.getTodos= function(){
  return query(`
  SELECT * FROM todos
  `)
}
exports.updateTodo= function(id, status){
  return query(`
  UPDATE author
  SET status= ?
  WHERE id= ? 
  `,[status, id])
}
exports.createTodo= function(todo){
  return query(`
  INSERT INTO todos(todo) VALUES(?)
  `,[todo])
}
