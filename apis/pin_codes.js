const pins = require('../data/pin_codes');

function getDevicePinCodes(req, res) {
	const pinEntry = pins.find(function (item) {
		return item.device_information.serial_number === req.params.serial;
	});


	if (!pinEntry) {
		return res.status(404).json({ error: 'Pin codes not found' });
	}

  res.json(pinEntry);
}

module.exports = getDevicePinCodes;