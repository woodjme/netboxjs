const Axios = require('axios')

let Client = function (params) {

	this.options = {}
	this.options.host = params.host
	this.options.token = params.token
	this.options.defaultParams = {
		limit: params.defaultLimit,
		offset: params.defaultOffset
	}

	this.axios = Axios.create({
		baseURL: this.options.host,
		headers: {
			'Accept': 'application/json',
			'Authorization': `Token ${this.options.token}`,
			'Content-Type': 'application/json'
		}
	})
}

module.exports = Client
