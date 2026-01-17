async function fetchGas(network) {
  return {
    fee: Math.floor(Math.random() * 100)
  };
}

module.exports = {
  fetchGas
};
