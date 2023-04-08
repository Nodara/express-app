require('dotenv').config();
require('./database/connection');

const express = require('express');
const router = require('./routes');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const errorConverterMiddleware = require('./middlewares/errorConverterMiddleware');

const PORT = 5001;

const app = express();

app.use(express.json());
app.use('/api', router);

app.use(errorConverterMiddleware);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
});
