const fs=require('node:fs'),path=require('node:path'),test=require('node:test'),assert=require('node:assert/strict');
const root=__dirname,pages=['index.html','catalog.html','product.html','about.html','journal.html','contact.html'];
const html=Object.fromEntries(pages.map(p=>[p,fs.readFileSync(path.join(root,p),'utf8')]));
const css=fs.readFileSync(path.join(root,'styles.css'),'utf8'),js=fs.readFileSync(path.join(root,'app.js'),'utf8');
test('corporate site has six connected pages',()=>{for(const p of pages){assert.match(html[p],/aria-label="Primary navigation"/);assert.match(html[p],/catalog\.html/);assert.match(html[p],/fictional|Fictional/i)}});
test('home and catalog have distinct roles',()=>{assert.match(html['index.html'],/data-limit="4"/);assert.doesNotMatch(html['index.html'],/data-filter=/);assert.match(html['catalog.html'],/data-filter="living"/);assert.match(html['catalog.html'],/data-sort/)});
test('commerce works across pages',()=>{assert.match(js,/localStorage/);assert.match(js,/renderProductPage/);assert.match(js,/renderSearch/);assert.match(js,/renderCart/);assert.match(js,/Simulated order complete/);assert.match(js,/aria-checked/)});
test('company, editorial, and trade journeys exist',()=>{assert.match(html['about.html'],/The company/);assert.match(html['journal.html'],/Material journal/);assert.match(html['contact.html'],/data-contact-form/)});
test('responsive and reduced motion styles exist',()=>{assert.match(css,/@media\(max-width:800px\)/);assert.match(css,/prefers-reduced-motion:reduce/)});
