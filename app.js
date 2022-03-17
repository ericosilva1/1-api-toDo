require('dotenv').config();

const express = require('express');
const conectDb = require('./config/db.config');
const cors = require('cors');

conectDb();

const app = express();


app.use(express.json());

app.use(cors());

// Router

app.use('/', require('./routes/todo.routes'));

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));