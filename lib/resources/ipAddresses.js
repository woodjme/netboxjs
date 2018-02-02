/**
 * IP Addresses
 */
module.exports = function (Client) {
	
	Client.prototype.getIPAddresses = function (params) {
		return this.axios({
			method: 'get',
			url: 'ipam/ip-addresses/',
			params: params ? params : this.options.defaultParams
		})
	}

	Client.prototype.postIPAddress = function (data) {
		return this.axios({
			method: 'post',
			url: '/ipam/ip-addresses/',
			data: data
		})
	}

	Client.prototype.patchIPAddress = function (data) {
		return this.axios({
			method: 'patch',
			url: `/ipam/ip-addresses/${this.data.id}/`,
			data: data
		})
	}
}
