const cloudSettings = require('../data/cloud_settings.json');

function getDeviceCloudSettings(req, res) {
	const cloudEntry = cloudSettings.find(function (item) {
		return item.device_information.serial_number === req.params.serial;
	});

	if (!cloudEntry) {
		return res.status(404).json({ error: 'Cloud settings not found' });
	}

	res.json(cloudEntry);
}

function getAllCloudSettings(req, res) {
	const cloudEntry = cloudSettings.map(function (item) {
		return item;
	});

	if (!cloudEntry) {
		return res.status(404).json({ error: 'Cloud settings not found' });
	}

	res.json(cloudEntry);
}

module.exports =
{
	getDeviceCloudSettings,
	getAllCloudSettings
}
