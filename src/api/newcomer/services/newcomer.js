'use strict';

/**
 * newcomer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newcomer.newcomer');
