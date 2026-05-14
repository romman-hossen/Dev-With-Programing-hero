const express = require('express')
const app  = express();
const port = process.env.PORT || 5001;
app.get('/',(req,res) => {
    res.send("Hello world")
})
app.listen(port, () => {
    console.log(`Express success done ${port}`)
})