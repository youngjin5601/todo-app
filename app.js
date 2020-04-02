const express=require('express')
const app=express()
const serviceTodos=require('./models/serviceTodos')

app.use(express.static('public'))
app.get('/todos',async (req,res)=>{
  const todos= await serviceTodos.getTodos()
  console.log(todos)
  setTimeout(()=>{
    res.json(todos)
  },3000)
  
})
app.listen(3000,()=>{
  console.log('server running')
})