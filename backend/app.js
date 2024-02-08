const express = require("express");
const APi = require('./router');
const app = express();
const db = require('./config/db')
const bodyParser = require('body-parser')
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/api", APi);
try {
    db.dbConnection.authenticate();
    console.log('Connected to the database');

    // Your database operations go here

} catch (error) {
    console.error('Error executing query:', error.message);
    throw error;
}

// Call the async function


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});