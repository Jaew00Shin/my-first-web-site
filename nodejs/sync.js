var fs=require('fs');

// readFileSync

console.log('A');
fs.readFile('nodejs/sample.txt','utf8',function(err,result){
    console.log(result);
});

console.log('C');