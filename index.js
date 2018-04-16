const Koa = require('koa');
const app = new Koa();
const logger =require('koa-logger');

app.use(logger());
// response
app.use(ctx => {
  ctx.body = 'Hello Vlad anton';
});

app.listen(3000);