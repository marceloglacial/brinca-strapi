"use strict";

/**
 *  partner-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::partner-category.partner-category",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const response = await strapi.entityService.findMany(
        "api::partner-category.partner-category",
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(response);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
