const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/ErrorHandler')
const connectDB = require('./config/db')


connectDB()

const app = express();

 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalR'));
app.use('/api/users', require('./routes/userR'));

app.use(errorHandler)
app.listen(port, () => console.log(`server is started on the port ${port}`));

    