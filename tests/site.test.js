import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');

test('core hotel journeys exist',()=>{
  for(const id of ['stay','gallery','amenities','dining','contact']) assert.match(html,new RegExp('id="'+id+'"'));
  assert.match(html,/Check rooms/);
  assert.match(html,/Call hotel/);
  assert.match(html,/Send enquiry/);
});

test('researched identity and booking source are present',()=>{
  assert.match(html,/Hotel Parth/);
  assert.match(html,/Hotel O Parth/);
  assert.match(html,/oyorooms\.com\/215204/);
  assert.match(html,/99398 81788/);
});

test('enquiry form calls backend',()=>{
  assert.match(html,/fetch\('\/api\/enquiry'/);
  assert.match(html,/name="checkin"/);
  assert.match(html,/name="checkout"/);
});

test('backend validates required fields',()=>{
  const source=fs.readFileSync(new URL('../api/enquiry.js',import.meta.url),'utf8').replace('export default function handler','function handler');
  const ctx={module:{exports:{}}};
  vm.runInNewContext(source+'\nmodule.exports=handler;',ctx);
  const calls=[];
  const res={status(c){calls.push(['status',c]);return this},json(x){calls.push(['json',x]);return x}};
  ctx.module.exports({method:'POST',body:{name:'A'}},res);
  assert.equal(calls.find(x=>x[0]==='status')[1],400);
  calls.length=0;
  ctx.module.exports({method:'POST',body:{name:'A',phone:'9999999999',checkin:'2026-10-01',checkout:'2026-10-02'}},res);
  assert.equal(calls.find(x=>x[0]==='status')[1],200);
});