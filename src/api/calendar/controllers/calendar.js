"use strict";

/**
 *  calendar controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::calendar.calendar",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const calendar = await strapi.entityService.findMany(
        "api::calendar.calendar",
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(calendar);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
