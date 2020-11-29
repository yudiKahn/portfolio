const express = require('express');
const path = require('path');
//const mongoose = require('mongoose');

const app = express();

/*mongoose.connect(process.env.DB ,{ useUnifiedTopology: true,  useNewUrlParser: true })
        .then(()=>console.log('conected'))
        .catch((er)=>console.error(er));*/

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('Example app listening on port '+ listener.address().port)
});