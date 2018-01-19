const Axios = require('axios');

let Client = function (params) {

	this.options = {};
	this.options.host = params.host;
	this.options.token = params.token;
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
	});
}

/**
 * Virtual Machines
 */

Client.prototype.getVirtualMachines = function (params) {
	return this.axios({
		method: 'get',
		url: '/virtualization/virtual-machines/',
		params: params ? params : this.options.defaultParams
	});
}

Client.prototype.postVirtualMachine = function (data) {
	return this.axios({
		method: 'post',
		url: '/virtualization/virtual-machines/',
		data: data
	})
}

Client.prototype.patchVirtualMachine = function (data) {
	return this.axios({
		method: 'patch',
		url: `/virtualization/virtual-machines/${data.id}/`,
		data: data
	});
}

/**
 * IP Addresses
 */

Client.prototype.getIPAddresses = function (params) {
	return this.axios({
		method: 'get',
		url: 'ipam/ip-addresses/',
		params: params ? params : this.options.defaultParams
	});
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
		url: `/ipam/ip-addresses/${this.data.id}`,
		data: data
	})
}

module.exports = Client;
