/**
 * Vlans
 */
module.exports = function ipAddresses(Client) {
  Client.prototype.getVlans = function getVlans(params) {
    return this.axios({
      method: 'get',
      url: '/api/ipam/vlans/',
      params: params || this.options.defaultParams,
    });
  };
}