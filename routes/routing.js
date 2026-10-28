const express = require('express');

//all of these are gets, so no need to name the prefix GET
const home = require('./../apis/home');
const devices = require('./../apis/devices');
const deviceConfig = require('./../apis/device_config');
const pins = require('./../apis/pin_codes');
const deviceCloudSettings = require('../apis/cloud_settings');

const router = express.Router();

router.get('/service-parts/devices', devices.getAllDevices);
router.get('/service-parts/:serial', devices.getDeviceBySerial);
router.get('/service-parts/:serial/config', deviceConfig);
router.get('/service-parts/:serial/pins', pins);
router.get('/service-parts/:serial/cloud', deviceCloudSettings.getDeviceCloudSettings);
router.get('/service-parts/cloud/all', deviceCloudSettings.getAllCloudSettings);

router.get('/', function (req, res) {
   const routeList = [];

   router.stack.forEach(function (layer) {
     if (layer.route) {
       const method = Object.keys(layer.route.methods)[0].toUpperCase();
       routeList.push({
         method: method,
         path: '/api/v1' + layer.route.path
       });
     }
   });

   res.json(routeList);
});

module.exports = router;