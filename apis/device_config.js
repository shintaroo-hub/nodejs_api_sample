const cfg = require('../data/device_config');

function getDeviceConfig(req, res) {
	const config = cfg.find(function (item) {
		return item.device_information.serial_number === req.params.serial;
	});
	
	if (!config) {
		return res.status(404).json({ error: 'Device Config not found' });
	}

  res.json(config);
}

module.exports = getDeviceConfig;