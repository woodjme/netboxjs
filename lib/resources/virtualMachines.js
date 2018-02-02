/**
 * Virtual Machines
 */
module.exports = function (Client) {

	Client.prototype.getVirtualMachines = function (params) {
		return this.axios({
			method: 'get',
			url: '/virtualization/virtual-machines/',
			params: params ? params : this.options.defaultParams
		})
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
		})
	}
}
