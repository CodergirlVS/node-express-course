const {writeFile} = require('fs').promises;


 async function makeFile() {
    try{
        await writeFile('./content/practice2.txt', "This is first line. \n");
    
        for (let i = 2; i <= 10; i++) {
        await writeFile('./content/practice2.txt', `This is the ${i} line. \n`, {flag: 'a'})
        };
    }
    catch(error){
        console.log(error, "Error while writing practice2 file")
    }
};
makeFile();
