const express = require('express');
const mongoose = require('mongoose');

const app = express()
app.use(express.static(__dirname + '/public'));


mongoose.connect(process.env.DB ,{ useUnifiedTopology: true,  useNewUrlParser: true })
        .then(()=>console.log('conected'))
        .catch((er)=>console.error(er));


const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('Example app listening on port '+ listener.address().port)
});