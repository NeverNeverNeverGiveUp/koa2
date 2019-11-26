const koa = require('koa');
const Router = require("koa-router");

const app = new koa();



// 子路由1
const home =new Router();
home.get('/jspang',async(ctx)=>{
    ctx.body="Home JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Home ToDo';
})


// 子路由2
const page =new Router();
page.get('/jspang',async(ctx)=>{
    ctx.body="Page JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
})

// 父级路由
const router = new Router();
// 装载子路由
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());



//加载路由中间件
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => {
    console.log("狼来了！");
})