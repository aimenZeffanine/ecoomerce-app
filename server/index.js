const express = require('express');
const mongoose = require('mongoose');


const authRouter = require('./routes/auth');

const uri = "mongodb+srv://aimen:mongodb@cluster0.u8mhhj7.mongodb.net/?appName=Cluster0";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(authRouter);


mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Starting server on port ${PORT}`);
});