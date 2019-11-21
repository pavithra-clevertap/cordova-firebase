cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "ionic-plugin-keyboard.keyboard",
      "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
      "pluginId": "ionic-plugin-keyboard",
      "clobbers": [
        "cordova.plugins.Keyboard"
      ],
      "runs": true
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
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    }
  ];
  module.exports.metadata = {
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-ionic-webview": "1.2.1",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-firebasex": "6.1.0",
    "clevertap-cordova": "2.1.4"
  };
});