//Require Dependencies
const express = require('express');

// Initialize the App
const app = express();

//Configure App Settings

//Set up our port Value
const port = process.env.PORT || 3000;
//Enviroment Variables

//mount routes
app.get("/greeting/:name", (req, res) =>{
   
   const name = req.params.name;
    const phrase = ` Yo! What\'s up ${name} ?`
   
    res.send(phrase);
})

//mount middleware

//tell the app to listen
app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
  });