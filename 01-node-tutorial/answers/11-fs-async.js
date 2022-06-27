const { readFile, writeFile } = require("fs");
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
    writeFile(
        './content/result-async.txt', 
        `Here is the result: ${first}, ${second}`
        ,{flag: 'a'}
        ,(err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result, "Am done with fs-async");

        })

    })
});
console.log('starting the next one')