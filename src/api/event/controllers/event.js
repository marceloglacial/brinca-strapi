"use strict";

/**
 *  event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const event = await strapi.entityService.findMany(
      "api::event.event",
      query
    );

    const sanitizedEntity = await this.sanitizeOutput(event);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
