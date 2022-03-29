const express = require('express');
const app = express();


   function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> 22n);
    return new Date(dateBits + 1420070400000);
}

  app.get('/:id', async(req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');
 let id = req.params.id
 res.send({date: snowflaeToDate(id)})


})


 
app.listen(process.env.PORT || 3000, () => {
  console.log("Ready")
})
