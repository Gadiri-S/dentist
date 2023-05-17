'use strict';

/**
 * employee controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::employee.employee',
({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
  
      const entity = await strapi.db.query("api::employee.employee").findOne({
        populate:true,
        where: {slug},
      
      });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    }}))
;


  