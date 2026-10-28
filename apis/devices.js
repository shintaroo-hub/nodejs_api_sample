const devices = require('../data/devices');

function getAllDevices(req, res)
{
	console.log(devices);

  const deviceList = devices.map(function(item){
    return item;
  })
	res.json(deviceList);
}

function findDeviceBySerial(serial) {
  return devices.find(function (item) {
    return item.nodes.device_information.serial_number === serial;
  });
}

function getDeviceBySerial(req, res) {
  const device = findDeviceBySerial(req.params.serial);

  if (!device) {
    return res.status(404).json({ error: 'Device not found' });
  }

  res.json(device);
}


module.exports = 
{
  getDeviceBySerial,
  getAllDevices
}
  