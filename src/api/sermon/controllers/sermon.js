'use strict';

/**
 * sermon controller
 */

// @ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreController('api::sermon.sermon', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.db.query('api::sermon.sermon').findOne({
      where: { slug },
      populate:["Picture", "Audio", "Slides"]
    });

    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  } 
}
));
