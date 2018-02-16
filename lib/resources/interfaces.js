/**
 * Interfaces
 */
module.exports = function (Client) {

	Client.prototype.getInterfaces = function (params) {
		return this.axios({
			method: 'get',
			url: '/api/virtualization/interfaces/',
			params: params ? params : this.options.defaultParams
		})
	}

	Client.prototype.createInterface = function (data) {
		return this.axios({
			method: 'post',
			url: '/api/virtualization/interfaces/',
			data: data
		})
	}
}
