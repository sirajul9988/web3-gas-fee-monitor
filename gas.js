const api = require("./api");

async function getGasFee(network) {
  const data = await api.fetchGas(network);

  let status = "low";
  if (data.fee > 50) {
    status = "high";
  }

  return {
    network: network,
    fee: data.fee,
    status: status,
    checkedAt: new Date().toISOString()
  };
}

module.exports = {
  getGasFee
};
