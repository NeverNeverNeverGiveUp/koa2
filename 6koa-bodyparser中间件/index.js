const koa = require('koa');

const app= new koa();
const bodyParser=require("koa-bodyparser");
// 在代码中使用后，直接可以用ctx.request.body进行获取POST请求参数，
app.use(bodyParser());
app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/' && ctx.method==='POST'){
        // 在代码中使用后，直接可以用ctx.request.body进行获取POST请求参数，
         let postData= ctx.request.body;
         ctx.body=postData;
    }else{
        ctx.body='<h1>404!</h1>';
    }
});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});