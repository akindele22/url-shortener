const express = require('express');
const cors = require('cors'); //imports the cors module
const routers = require('./controller/routes');
require('./database').connect();


// instantiate the express
const app = express();

app.use(cors());
app.use(express.json()); //enabless server to understand json requests

app.use(routers);
// Ejs Setting 4 the frontend
app.set('view engine', 'ejs');


const PORT = process.env.PORT || 4000;

//listen for incoming response
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));