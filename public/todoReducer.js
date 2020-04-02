const todoReducer=(todos, {type, payload})=>{
  switch(type){
    case "SET_INIT_DATA":
      return payload;
    case "ADD_TODO":
      return [...todos, {id: todos.length+1, todo: payload, status: false , createdAt: null}];
    case "CHANGE_TODO_STATUS":
      return todos.map(todo=>{
        todo.status= todo.id===+payload ? !todo.status: todo.status
        return todo
      });
  }
}