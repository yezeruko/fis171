cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dynamic-update/www/dynamicupdate.js",
        "id": "cordova-plugin-dynamic-update.DynamicUpdate",
        "pluginId": "cordova-plugin-dynamic-update",
        "clobbers": [
            "dynamicupdate"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-local-notification/www/notification.js",
        "id": "phonegap-plugin-local-notification.Notification",
        "pluginId": "phonegap-plugin-local-notification",
        "clobbers": [
            "Notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "id": "cordova-plugin-badge.Badge",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "file": "plugins/cordova-plugin-badge/src/browser/favico.min.js",
        "id": "cordova-plugin-badge.Badge.Favico",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge.Favico"
        ]
    },
    {
        "file": "plugins/cordova-plugin-badge/src/browser/BadgeProxy.js",
        "id": "cordova-plugin-badge.Badge.Proxy",
        "pluginId": "cordova-plugin-badge",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
        "id": "cordova-plugin-local-notification.LocalNotification",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local"
        ]
    },
    {
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
        "id": "cordova-plugin-local-notification.LocalNotification.Core",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
        "id": "cordova-plugin-local-notification.LocalNotification.Util",
        "pluginId": "cordova-plugin-local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-app/backgroundapp.js",
        "id": "cordova-plugin-background-app.backgroundapp",
        "pluginId": "cordova-plugin-background-app",
        "clobbers": [
            "cordova.backgroundapp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/src/browser/BackgroundModeProxy.js",
        "id": "cordova-plugin-background-mode.BackgroundMode.Proxy",
        "pluginId": "cordova-plugin-background-mode",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-autostart/www/auto-start.js",
        "id": "cordova-plugin-autostart.AutoStart",
        "pluginId": "cordova-plugin-autostart",
        "clobbers": [
            "cordova.plugins.autoStart"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-fetch/www/BackgroundFetch.js",
        "id": "cordova-plugin-background-fetch.BackgroundFetch",
        "pluginId": "cordova-plugin-background-fetch",
        "clobbers": [
            "window.BackgroundFetch"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-dynamic-update": "0.2.1",
    "phonegap-plugin-local-notification": "1.0.1",
    "cordova-plugin-device": "2.0.1",
    "cordova-plugin-app-event": "1.2.1",
    "de.appplant.cordova.plugin.local-notification": "0.8.4.1",
    "cordova-plugin-badge": "0.8.7",
    "cordova-plugin-local-notification": "0.9.0-beta.2",
    "cordova-plugin-background-app": "2.0.2",
    "cordova-plugin-background-mode": "0.7.2",
    "cordova-plugin-autostart": "2.3.0",
    "cordova-plugin-boot-launcher": "0.2.0",
    "cordova-plugin-background-fetch": "5.3.0",
    "cordova-plugin-background-service": "1.3.5",
    "cordova-plugin-dialogs": "2.0.1"
}
// BOTTOM OF METADATA
});