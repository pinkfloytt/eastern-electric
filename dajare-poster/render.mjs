import { chromium } from 'playwright';
const [,,src='poster.html', out='dist/ishikura-dajare-10.png'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1200,height:1800}, deviceScaleFactor:2 });
await p.goto('file://' + process.cwd() + '/' + src);
await p.evaluate(() => document.fonts.ready);
await p.locator('.page').screenshot({ path: out });
await b.close();
console.log('wrote', out);
