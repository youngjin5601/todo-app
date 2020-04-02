const Form=()=>{
  const { dispatch}=React.useContext(TodoContext)
  const inputRef=React.useRef(false)
  const addTodoData=(e)=>{
    e.preventDefault()
    dispatch({
      type: "ADD_TODO",
      payload: inputRef.current.value
    })
    inputRef.current.value=''
  }
  return(
    <form>
      <input type="text"  ref={inputRef}></input>
      <button onClick={addTodoData}>add todo</button>
    </form>
  )
}
