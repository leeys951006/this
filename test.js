import fs from 'fs';
const mydata = fs.createReadStream(`기초데이터.csv`);

let rawData = ``;

mydata.on('data', (data) => {
  rawData += data;
});

mydata.on('end', () => {
  console.log(rawData);
});
