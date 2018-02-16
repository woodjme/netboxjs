/**
 * Virtual Machines
 */
module.exports = function (Client) {

	Client.prototype.getVirtualMachines = function (params) {
		return this.axios({
			method: 'get',
			url: '/api/virtualization/virtual-machines/',
			params: params ? params : this.options.defaultParams
		})
	}

	Client.prototype.createVirtualMachine = function (data) {
		return this.axios({
			method: 'post',
			url: '/api/virtualization/virtual-machines/',
			data: data
		})
	}

	Client.prototype.updateVirtualMachine = function (data) {
		return this.axios({
			method: 'patch',
			url: `/api/virtualization/virtual-machines/${data.id}/`,
			data: data
		})
	}
}
