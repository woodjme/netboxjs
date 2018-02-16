/**
 * Virtual Machines
 */
module.exports = function virtualMachines(Client) {
  Client.prototype.getVirtualMachines = function getVirtualMachines(params) {
    return this.axios({
      method: 'get',
      url: '/api/virtualization/virtual-machines/',
      params: params || this.options.defaultParams,
    });
  };

  Client.prototype.createVirtualMachine = function createVirtualMachine(data) {
    return this.axios({
      method: 'post',
      url: '/api/virtualization/virtual-machines/',
      data,
    });
  };

  Client.prototype.updateVirtualMachine = function updateVirtualMachine(data) {
    return this.axios({
      method: 'patch',
      url: `/api/virtualization/virtual-machines/${data.id}/`,
      data,
    });
  };
};
