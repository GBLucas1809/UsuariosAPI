const app = require('express')();
const app_port = 3000;

app.listen(app_port,() => {    
    console.log("API rodando na porta "+app_port);
});

app.get('/olamundo', (req, res) => {
    res.send("Olá Mundo!");
})