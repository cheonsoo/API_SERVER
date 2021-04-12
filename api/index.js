const express = require("express");
const path = require("path");
const app = express();

app.get('/ui', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, "../view") });
});

app.get('/item/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(`### id: ${id}`);
  const item = {
    id,
    name: "닌텐도 스위치 네온",
    desc: "닌텐도 스위치 네온. 빨리 사주세요. 현기증 난단 말이에요~",
    quantity: 123,
    img: "http://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/6bfb/1a6c0738f36c313ef851aaf90e6f573f233c68734afd3b0d5c0d9bdf9d5d.jpg"
  };

  res.send({
    data: item
  });
});

app.get('/items', (req, res, next) => {
  let arr = [];
  for (let i = 0; i < 30; i++) {
    const id = Math.round(Math.random() * 100000);
    arr.push({
      id: id,
      name: `name-${id}`,
      desc: "닌텐도 스위치 네온. 빨리 사주세요. 현기증 난단 말이에요~",
      img: "http://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/6bfb/1a6c0738f36c313ef851aaf90e6f573f233c68734afd3b0d5c0d9bdf9d5d.jpg"
    });
  }

  res.send({
    data: arr
  });
});

module.exports = app;
