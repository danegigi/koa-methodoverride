
## Inspired by express method override

**Usage**
```
const method_override = require("koa-methodoverride")
app.use(method_override());
```

## Access method
* this.request.original_method
*  this.request.method