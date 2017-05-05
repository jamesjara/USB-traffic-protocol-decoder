const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('dump.txt')
});

const result = [];
rl.on('line', (line)=>{
    if(line.includes('Leftover Capture Data')){
        const char = parseInt(line.replace('Leftover Capture Data: ','').substr(4,2),16);
        if(char>0 && char>=4 && char <=24){
                result.push(String.fromCharCode(char +  'a'.charCodeAt(0)-4) );
        } else {
                result.push(' ');
        }
    }
});

rl.on('close', ()=>{
  console.log(result.join(''));
});
