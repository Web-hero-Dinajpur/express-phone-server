const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('hello world more comming coming sooon')
})
app.get('/data', (req, res)=>{
    res.send('More coming soon in pae')
})
app.listen(port, ()=>{
    console.log(`bangladesh`)
})