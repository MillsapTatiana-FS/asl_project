const express = require('express')
const app = express()

// GET / HTTP/1.1
app.get('/',  (request, response) => {
    response.send('Home Page! GET...')
})
// POST / HTTP/1.1
app.post('/', (request, response) => {
    response.send('Home Page! POST...')
})

//GET /products/777-amethyst HTTP/1.1
app.get('/products/:productId-:productName', (request, response) => {
    response.send(
        'Product Page! Product name: ' + request.params.productName + 
        'Product id: ' + request.params.productId,
        )
})

//GET /products/blue-calcite  HTTP/1.1
app.get('/products/:productName', (request, response) => {
    response.send('Product Page! Product name: ' + request.params.productName)
})


//order of routes matter

app.listen(3000)