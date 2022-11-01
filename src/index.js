const express = require('express')

const app = express()


app.get('/', (req,res)=>{
  res.send({
    name: "Ada"
  })
})


app.listen(3000, ()=>{
  console.log("App started!!!")
})