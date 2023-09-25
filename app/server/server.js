const express = require('express')
const cors = require("cors")
const app = express()
const paymentsRoute = require("./payments")
const port = 5000
app.use(cors());
app.listen(port, (req, res) => {
    console.log('Listening on port ', port)
})

app.use('/api',paymentsRoute);

const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: allowedOrigins,
    credentials:true,
}))