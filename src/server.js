require('dotenv').config();
require('./database/connection');

const express = require('express');
const router = require('./routes');

const PORT = 5001;

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
});
