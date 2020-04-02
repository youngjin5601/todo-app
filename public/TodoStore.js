
const TodoContext=React.createContext()

const TodoStore=({children})=>{
  const [todos, dispatch]=React.useReducer(todoReducer, [])

  const loading=useFetch('/todos', (initData)=>{
    dispatch({
      type: "SET_INIT_DATA",
      payload: initData
    })
  })

  React.useEffect(()=>{
    console.log("new todo is renderd", todos)
  },[todos])
  
  return(
    <TodoContext.Provider value={{ todos,  loading, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}