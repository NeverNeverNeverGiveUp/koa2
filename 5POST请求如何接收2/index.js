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
        let pastData = await parsePostData(ctx);
        ctx.body = pastData;

    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }
});

// 解析Node原生POST参数
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.on('data', (data) => {
                postdata += data
            })
            ctx.req.addListener("end", function () {
                let parseData = parseQueryStr( postdata )
                resolve(parseData);
            })
        } catch (error) {
            reject(error);
        }
    });
};
// POST字符串解析JSON对象
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}

app.listen(3000, () => {
    console.log("起风了！");
})