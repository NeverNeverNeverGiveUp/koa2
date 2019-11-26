const koa = require('koa');
const Router = require("koa-router");

const app = new koa();
const router = new Router();

router.get("/", (ctx, next)=>{
    ctx.body = "hello,router!"
});

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => {
    console.log("狼来了！");
})