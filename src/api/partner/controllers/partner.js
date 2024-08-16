"use strict";

/**
 *  partner controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::partner.partner", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const partner = await strapi.entityService.findMany(
      "api::partner.partner",
      query
    );

    const sanitizedEntity = await this.sanitizeOutput(partner);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
