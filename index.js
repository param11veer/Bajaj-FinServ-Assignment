const express = require('express');
const app = express();


const requestLogger = require('./middlewares/requestLogger');
const bfhlController = require('./controllers/bfhlController');

app.use(express.json());
app.use(requestLogger);

app.post('/bfhl', bfhlController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
