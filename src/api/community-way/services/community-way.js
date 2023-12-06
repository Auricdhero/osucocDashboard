'use strict';

/**
 * community-way service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-way.community-way');
