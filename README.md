# Creation Date API
API that returns Discord ID creation dates.

## Usage
To get a creation date, fetch from the following URL:<br>
`https://vs.now.sh/<ANY_ID_HERE>`
<br><br>
It will return a JSON response in this format:<br>
```json
{"date":"2015-01-01T00:00:00.000Z","comparison":"7 years ago","human":"January 1, 2015, 12:00:00 AM"}
```
The response contains:

* The regular ISO date
* A comparison from the current time to the ISO date
* A more human friendly, readable format

### Example
Javascript example of this API:<br>
```js
let id = "0"
var response = await fetch("https://vs.now.sh/" + id)
const data = await response.json()
console.log(data.human + " [" + data.comparison + "]")
```

This will log `January 1, 2015, 12:00:00 AM [7 years ago]` in the console.

