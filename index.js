const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Vlad anton';
});

app.listen(3000);
console.log("Ura server work");