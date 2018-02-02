const Client = require('./client')

require('./resources/virtualMachines')(Client)
require('./resources/ipAddresses')(Client)

module.exports = Client
