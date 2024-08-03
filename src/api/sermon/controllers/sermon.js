'use strict';

/**
 * sermon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sermon.sermon', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.db.query('api::sermon.sermon').findOne({
      where: { slug }
    });

    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  }
}));
