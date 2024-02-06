const fs = require("fs");

// get file from db folder and data.json
const file = "./models/db/data.json";
/*  */

// read file from db folder and data.json
const readDB = (items) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const itemsPerPage = items ? parseInt(items) : 10;
    const parsedData = JSON.parse(data);
    const itemsToReturn = parsedData.slice(0, itemsPerPage);
    return itemsToReturn;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

const readOneDevice = (id) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const parsedData = JSON.parse(data);
    const device = parsedData.find((device) => device.id === id);
    return device;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  readDB,
  writeDB,
  readOneDevice,
};
