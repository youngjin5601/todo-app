const Header=()=>{
  const {todos}=React.useContext(TodoContext)
  return(
    <div>
      <h1>Hello todo Application</h1>
      <div>number of todos : {todos.filter(todo=>todo.status==false).length}</div>
    </div>
    

  )
}