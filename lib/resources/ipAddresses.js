/**
 * IP Addresses
 */
module.exports = function (Client) {
	
	Client.prototype.getIPAddresses = function (params) {
		return this.axios({
			method: 'get',
			url: '/api/ipam/ip-addresses/',
			params: params ? params : this.options.defaultParams
		})
	}

	Client.prototype.createIPAddress = function (data) {
		return this.axios({
			method: 'post',
			url: '/api/ipam/ip-addresses/',
			data: data
		})
	}

	Client.prototype.updateIPAddress = function (data) {
		return this.axios({
			method: 'patch',
			url: `/api/ipam/ip-addresses/${this.data.id}/`,
			data: data
		})
	}
}
