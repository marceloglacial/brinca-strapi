'use strict';

/**
 * header-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-menu.header-menu');
