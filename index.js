const fs = require('fs');
const express = require('express');
const app = express();

app.get('/:module', (req, res) => {
  let module = req.params.module;

  console.log(module);

  fs.readFile(`./data/${module}.json`, 'utf-8', (err, data) => {
    if (err) throw err;
  
    const jsonData = JSON.parse(data);
    res.send(`${jsonData.count}`);
  });
});

app.post('/:module', (req, res) => {
    res.status(200);

    fs.readFile(`./data/${req.params.module}.json`, 'utf-8', (err, data) => {
      if (err) throw err;
    
      const jsonData = JSON.parse(data);
      fs.writeFileSync(`./data/${req.params.module}.json`, `{ "count":${jsonData.count+1} }`);
    });
});

app.listen(8000, () => {
  console.log('Listening on port 8000!');
});