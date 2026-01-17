const fs = require("fs");

function saveLog(data) {
  fs.writeFileSync("data/gas-log.json", JSON.stringify(data, null, 2));
}

module.exports = {
  saveLog
};
