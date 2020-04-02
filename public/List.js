const List=()=>{
  const {todos,loading}=React.useContext(TodoContext)
  return(
    <ul>
      { 
        loading ? <h3>data loading...</h3> : 
          todos.map( todo=><Item key={todo.id} todo={todo} /> )
      }
    </ul>
  )
}