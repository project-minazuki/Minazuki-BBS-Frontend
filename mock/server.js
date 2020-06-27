const $url = require('./config');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const glob = require('glob');
const {resolve} = require('path');
const fs = require('fs');

const App = new Koa();
const router = new Router({prefix: $url.prefix});
const map = {};
const dirPath = __dirname.replace(/\\/g, '/');
const apiHead = dirPath + $url.prefix;

glob.sync(resolve('./mock/api', "**/*.json")).forEach((item, i) => {
    const jsonPath = item && item.split(apiHead)[1];
    const apiPath = jsonPath.replace('.json', '');
    map[jsonPath] = apiPath;

    router.get(apiPath, (ctx, next) => {
        try {
            let jsonStr = fs.readFileSync(item).toString();
            ctx.body = {
                state: 200,
                type: 'success',
                data: JSON.parse(jsonStr)
            }
        } catch (err) {
            ctx.throw('Server Error', 500);
        }
        next();
    });
});

fs.writeFile('./mock/map.json', JSON.stringify(map, null, 4),
    err => {
        if (!err) console.log('map.json generated successfully.');
        else console.log('route map generate failed.');
    });

App.use(router.routes()).use(router.allowedMethods()).use(logger())
    .use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.set('Access-Control-Allow-Headers',
        'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderField');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    if (ctx.method === 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
})

App.listen('1919', () => {
    console.log('Mock server is listening port 1919.');
})
