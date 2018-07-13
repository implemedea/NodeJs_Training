const zlib = require('zlib'); //compression
 
const gzip = zlib.createGzip(); 

//let cname='cts';
 
const fs = require('fs');   //file stream

const inp = fs.createReadStream('input.txt');  
const out = fs.createWriteStream('input.txt.gz');  
inp.pipe(gzip).pipe(out);  