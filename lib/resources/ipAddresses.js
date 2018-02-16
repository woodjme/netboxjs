/**
 * IP Addresses
 */
module.exports = function ipAddresses(Client) {
  Client.prototype.getIPAddresses = function getIPAddresses(params) {
    return this.axios({
      method: 'get',
      url: '/api/ipam/ip-addresses/',
      params: params || this.options.defaultParams,
    });
  };

  Client.prototype.createIPAddress = function createIPAddress(data) {
    return this.axios({
      method: 'post',
      url: '/api/ipam/ip-addresses/',
      data,
    });
  };

  Client.prototype.updateIPAddress = function updateIPAddress(data) {
    return this.axios({
      method: 'patch',
      url: `/api/ipam/ip-addresses/${data.id}/`,
      data,
    });
  };
};
