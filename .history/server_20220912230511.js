const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;



//initialize middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send("Hello"));
app.post('/',(req, res) => res.send("Hello"))


app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
