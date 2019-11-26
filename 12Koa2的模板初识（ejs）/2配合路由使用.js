
let Koa = require('koa');
let router = require('koa-router')();
let views = require('koa-views');  // 引入 模块
 
let app = new Koa();
 
//配置模板引擎 方式一：模板的后缀名是.ejs 如 index.ejs
app.use(views('view', {
  extension: 'ejs'
}))
 
/*
//配置模板引擎 方式二：模板的后缀名是.html 如 index.html
app.use(views('views',
  {
    map:{ html: 'ejs' }
  })
);
*/
 
app.use(async (ctx, next) => {
  ctx.state.userInfo = 'pack';  // 公用信息 ctx.state 
  await next();
})
 
router.get('/', async (ctx) => {
  let title = 'hello ejs'; // 向模板 传递 参数
  await ctx.render('index', { // 渲染 模板
    title
  })
})
 
router.get('/news', async (ctx) => {
  let list = ['list01', 'list02', 'list03']; // 向模板 传递 参数
  let content = '<h3>这个是h3</h3>';
  let num = 12;
  await ctx.render('news', { // 渲染 模板
    list,
    content,
    num,
    title:"想要title就给你个title"
  })
})
 
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
 
