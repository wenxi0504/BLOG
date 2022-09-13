const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo = {
    "learn-react": {
        comments:[],
    },
     "learn-node": {
        comments:[],
    },
      "my-thoughts-on-learning-react": {
        comments:[],
    }
     
    
    


}

//initialize middleware
app.use(express.json({ extended: false }));

app.post('/api/articles/:name/add-comments', (req, res) => { 
    const { usename, text } = req.body
    const articleName=req.params.name
    articlesInfo[articleName].comments.push({ username, text })
    res.status(200).send(articleInfo[articleName]);

})




// app.get('/', (req, res) => res.send("Hello"));
// app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
