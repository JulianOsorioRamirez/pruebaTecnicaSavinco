const express = require('express');
const app = express();
const sequelize = require('./database/db');


const PORT = process.env.PORT || 5000;
app.use(express.json());

const router = require("./routes/routes");

app.use("/", router);

app.listen(PORT, function () {
    console.log(`server ON`);

    sequelize.sync({ force: false }).then(() => {
        console.log("BBDD on");
    }).catch(error => {
        console.log('BBDD off', error);
    })

});