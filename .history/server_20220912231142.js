const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;



//initialize middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send("Hello"));
app.post('/',(req, res) => res.send(`Hello ${req.body.name}`))
app.get('/hello/:name',(req,res)=>res.send(`Hello ${req.params.name}`))
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
