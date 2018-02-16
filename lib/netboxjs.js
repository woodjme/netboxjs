const Client = require('./client');

require('./resources/virtualMachines')(Client);
require('./resources/ipAddresses')(Client);
require('./resources/interfaces')(Client);

module.exports = Client;
