const Item=({todo})=>{
  const {dispatch}=React.useContext(TodoContext)
  const toggleItem=(e)=>{
    //const id=e.target.dataset.id
    
    dispatch({
      type: "CHANGE_TODO_STATUS",
      payload: todo.id
    })
  }
  const itemClassName=todo.status===true ?"done":''
  return(
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.todo}
    </li>
  )
}