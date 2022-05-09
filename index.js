const express = require('express')
const app = express()
const bodyParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser)
const productRouter = require('./routes/Products')

app.use("/products", productRouter )

app.listen(3000)