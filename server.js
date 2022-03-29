const express = require('express');
const app = express();

function calcDate(date) {
    dateNow = new Date();
    dateThen = new Date(date);
    const diffTime = Math.abs(dateThen - dateNow);
    let seconds = Math.round(diffTime / 1000)
    let minutes = Math.round(diffTime / 1000 / 60)
    let hours = Math.round(diffTime / 1000 / 60 / 60)
    let days = Math.round(diffTime / 1000 / 60 / 60 / 24)
    let years = Math.round(diffTime / 1000 / 60 / 60 / 24 / 365)


    if (seconds >= 1 && seconds < 60) {
        if (seconds == 1) {
            return seconds + " second ago"
        } else {
            return seconds + " seconds ago"
        }
    } else if (minutes >= 1 && minutes < 60) {
        if (minutes == 1) {
            return minutes + " minute ago"
        } else {
            return minutes + " minutes ago"
        }
    } else if (hours >= 1 && hours < 24) {
        if (hours == 1) {
            return hours + " hour ago"
        } else {
            return hours + " hours ago"
        }
    } else if (days >= 1 && days < 365) {
        if (days == 1) {
            return days + " day ago"
        } else {
            return days + " days ago"
        }
    } else if (years >= 1) {
        if (years == 1) {
            return years + " year ago"
        } else {
            return years + " years ago"
        }
    }

}

function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> BigInt(unescape('%32%32')));
    return new Date(dateBits + 1420070400000);
}

app.get('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.params.id

    const date = new Date(snowflakeToDate(id));
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    res.send({
        date: snowflakeToDate(id),
        comparison: calcDate(snowflakeToDate(id)),
        human: dateTimeFormat.format(date)
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Ready")
})
