# Netboxjs

## Installation

`npm install netboxjs`

## Example

```js
let netboxjs = require('netboxjs');

let netboxClient = new netboxjs({
  host: String,
  token: String,
  defaultLimit: Int,
  defaultOffset: Int
});

netboxClient.getVirtualMachines({
  limit: 1
    })
    .then(response => {
        response.data.results.forEach(vm => {
            console.log(vm)
        });
    })
    .catch(error => {
        console.error(error.response.statusText);
    });
```
