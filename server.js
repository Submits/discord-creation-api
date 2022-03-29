const express = require('express');
const app = express();

@param {String} snowflake
@returns {Date} 


   function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> BigInt(22n));
    return new Date(dateBits + 1420070400000);
}

  app.get('/:id', async(req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');
 let id = req.params.id
 res.send({date: snowflakeToDate(id)})


})


 
app.listen(process.env.PORT || 3000, () => {
  console.log("Ready")
})
