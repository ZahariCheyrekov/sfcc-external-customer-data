"use strict";

const LocalServiceRegistry = require("dw/svc/LocalServiceRegistry");

/**
 * @function
 * @description It creates firebase service and makes a call to a realtime database
 * @returns {Object} returns service configuration
 */
function execute() {
    const response = LocalServiceRegistry.createService("http.firebase.service", {
        createRequest: function (svc, args) {
            svc.setRequestMethod(args.method);
            svc.URL += args.url;

            return JSON.stringify(args.body);
        },
        parseResponse: function (svc, client) {
            let result;

            try {
                result = JSON.parse(client.text);
            } catch (e) {
                result = client.text;
            }

            return result;
        },
        filterLogMessage: function (msg) {
            return msg.replace(/"password\"\:\".*?\"/, `"password":"******"`);
        },
    });

    return response;
}

module.exports = {
    execute: execute,
};
