const express = require('express')
const app = express()

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

//ex-1
app.get('/', function (request, response) {
    response.send("Server is up and running smoothly")
})

//ex-2
// app.get('/priceCheck/:name', function (request, response) {
//     response.send(store[request.params.name])
// })

app.get('/priceCheck/:name', function (request, response) {
    let name = request.params.name
    for(let i of store){
    if(i.name==name){
        response.send({price:i.price})
        return
    } 
}
         response.send({price:null})
})

