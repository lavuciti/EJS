const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('pages/index')
})

app.listen(3000, () =>{
    console.log('Listening on port 3000');
})
