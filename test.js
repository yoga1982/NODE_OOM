"use strict";
const list = [];
setInterval(() => {
  const record = new MyRecord();
  list.push(record);
}, 0.000001);
function MyRecord() {
  var x = "hii";
  this.name = x.repeat(100000000);
  this.id = x.repeat(100000000);
  this.account = x.repeat(100000000);
}
setInterval(() => {
  console.log(process.memoryUsage());
}, 100);
