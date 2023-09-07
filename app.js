const express = require('express');
const app = express();
const PORT = 3000;


app.get("/", (req,res)=>{
    /*
    #swagger.description = 'Retorna a rota principal da aplicação'
    */
    res.send("<h1>Hello World</h1>")
})



app.listen(PORT,()=>{
    console.log(`app running on url http://localhost:${PORT}`);
})