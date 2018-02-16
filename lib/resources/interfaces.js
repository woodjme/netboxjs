/**
 * Interfaces
 */
module.exports = function interfaces(Client) {
  Client.prototype.getInterfaces = function getInterfaces(params) {
    return this.axios({
      method: 'get',
      url: '/api/virtualization/interfaces/',
      params: params || this.options.defaultParams,
    });
  };

  Client.prototype.createInterface = function createInterface(data) {
    return this.axios({
      method: 'post',
      url: '/api/virtualization/interfaces/',
      data,
    });
  };
};
