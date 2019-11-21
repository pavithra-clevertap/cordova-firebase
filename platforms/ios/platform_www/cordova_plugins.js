cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "clevertap-cordova": "2.1.4",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-firebasex": "6.1.0"
  };
});