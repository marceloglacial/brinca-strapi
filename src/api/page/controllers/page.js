"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const page = await strapi.entityService.findMany("api::page.page", query);

    const sanitizedEntity = await this.sanitizeOutput(page);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
