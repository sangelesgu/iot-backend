const { response, request } = require("express");
const { readDB, readOneDevice } = require("../helpers/file.js");

const getDevices = async (req = request, res = response) => {
  try {
    const { perPage } = req.query;
    const devices = readDB(perPage);
    res.status(200).json({ ok: true, msg: "Devices", data: devices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, msg: "Error", error });
  }
};

const getDevice = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const device = readOneDevice(id);
    res.status(200).json({ ok: true, msg: "Device", data: device });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, msg: "Error", error });
  }
};

module.exports = {
  getDevices,
  getDevice,
};
