const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

const api = require('./api/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, '../bjj/dist/bjj')));

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../bjj/dist/bjj/index.html'));
});

const port = process.env.port || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server is running OK nore on port: ${port}`));