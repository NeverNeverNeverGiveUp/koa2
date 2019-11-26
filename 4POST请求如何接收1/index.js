const koa = require('koa');
const app = new koa();
app.use(async (ctx) => {
    if (ctx.url === "/" && ctx.method === "GET") {
        let html = `
        <h1>Koa2 request post demo</h1>
        <form method="POST"  action="/">
            <p>userName</p>
            <input name="userName" /> <br/>
            <p>age</p>
            <input name="age" /> <br/>
            <p>webSite</p>
            <input name='webSite' /><br/>
            <button type="submit">submit</button>
        </form>
        `;
        ctx.body = html;
    } else if (ctx.url === "/" && ctx.method === "POST") {
        //当请求时POST请求时
        ctx.body = "接收到请求！"

    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }
});

app.listen(3000,()=>{
    console.log("起风了！");
})