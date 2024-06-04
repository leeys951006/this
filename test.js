const CSVToJSON = require('csvtojson');
const fs = require('fs');

const fileName = '기초데이터.csv';

CSVToJSON()
  .fromFile(`기초데이터.csv`)
  .then((data) => {
    fs.writeFile(`기초데이터.csv`, JSON.stringify(data, null, 4), (err) => {
      if (err) {
        throw err;
      }
      console.log('JSON array is saved');
    });
  });
