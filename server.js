const express = require('express');
const app = express();


   function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> BigInt(unescape('%32%32')));
    return new Date(dateBits + 1420070400000);
}

  app.get('/:id', async(req, res) => {
     try{
res.setHeader('Access-Control-Allow-Origin', '*');
 let id = req.params.id
 res.send({date: snowflakeToDate(id)})
     }
     catch(e){
        res.send({error: e})
     }


})

app.use(function(req, res, next){
  res.status(404);

  if (req.accepts('json')) {
    res.send({error: "Route not found."});
    return;
  }

});
 
app.listen(process.env.PORT || 3000, () => {
  console.log("Ready")
})
