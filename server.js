const express = require('express');
const app = express();
   

  app.get('/:id', async(req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');
 let id = req.params.id

 const dateBits = Number(BigInt.asUintN(64, id) >> 22n);
 let date = new Date(dateBits + 1420070400000);
  res.send({date: date.toString()})


})


 
app.listen(process.env.PORT || 3000, () => {
  console.log("Ready")
})