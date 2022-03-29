const express = require('express');
const app = express();


function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> BigInt(unescape('%32%32')));
    return new Date(dateBits + 1420070400000);
}

app.get('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.params.id
    res.send({
        date: snowflakeToDate(id)
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Ready")
})
