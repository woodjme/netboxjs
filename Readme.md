# Netboxjs

[![Maintainability](https://api.codeclimate.com/v1/badges/9c8add749769878ec51f/maintainability)](https://codeclimate.com/github/woodjamie/netboxjs/maintainability)

## Development

This repo is currently under heavy development with an aim to provide a complete API wrapper for [Netbox](https://github.com/digitalocean/netbox)

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
