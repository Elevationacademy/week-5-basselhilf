const express = require('express')
const app = express()
const path = require('path')

//ex-3
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

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
// app.get('/', function (request, response) {
//     response.send("Server is up and running smoothly")
// })

//ex-2
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

//ex-4
app.get('/buy/:name', function (request, response) {
    let name = request.params.name
    for(let i of store){
    if(i.name==name){
        
        i.inventory-=1
        if(i.inventory>0){
        response.send({inventory:i.inventory})
        return
        }
        else response.send("Out of Stock")
    } 
}
    response.end()
})