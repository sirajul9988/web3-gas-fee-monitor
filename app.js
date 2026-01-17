const config = require("./config");
const gas = require("./gas");
const logger = require("./logger");

async function startApp() {
  console.log("Web3 Gas Fee Monitor Started");

  const network = config.network;
  const gasData = await gas.getGasFee(network);

  logger.saveLog(gasData);

  console.log("Network:", gasData.network);
  console.log("Gas Fee:", gasData.fee, "Gwei");
  console.log("Status:", gasData.status);
}

startApp();
