'use strict';


const override = function(){

  return async (ctx, next) => {
    const body = ctx.request.body; 
    if(!body) ctx.throw('Override called before body parser', 500);
    
    const originalMethod = ctx.method  || "GET";
    const newMethod = ctx.request.body._method || ctx.method;

    ctx.request.method = newMethod.toUpperCase();
    ctx.request.original_method = originalMethod;

    return next();
  }

}


module.exports = override;
