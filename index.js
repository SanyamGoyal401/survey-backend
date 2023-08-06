const express = require('express');
const {SuccessResponse } = require('./utils/common');
const connectDB = require('./config/db-config');
const apiRoutes = require('./routes')

//express app instance
const app = express();

//allow to parse json body
app.use(express.json());
//allow to parse urlencoded characters
app.use(express.urlencoded({ extended: true }));


//PORT NUMBER
const PORT = 5000 || process.env.PORT;

//Connect to DB
connectDB();


//check route
app.get('/', (req, res) => {
    SuccessResponse.message  = "Okay";
    return res.status(200).json(SuccessResponse);
})

app.use('/api', apiRoutes);


app.listen(PORT, function (err) {
    if (err) {
        console.log(`Error listening to Port ${PORT}`);
    }
    else {
        console.log(`Successfully listening to Port ${PORT}`);
    }
})