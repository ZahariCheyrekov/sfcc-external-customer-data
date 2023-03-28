"use strict";

const firebaseService = require("*/cartridge/scripts/services/firebaseService.js");

/**
 * Calls firebase service and configures response
 * @param {string} method - method type for request
 * @param {string} url - url for the request
 * @param {Object} body - body data for request
 * @returns {Object} returns service configuration
 */
function call(method, url, body) {
    const response = firebaseService.execute().call({
        method,
        url,
        body,
    }).object;

    return response;
}

module.exports = {
    call,
};
