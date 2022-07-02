const sentence = require('./practice2');
const {userInfo} = require('os');
const { writeFile } = require("fs");
const username = userInfo().username;

console.log(sentence, "From practice1");
console.log(username, "from practice1");

writeFile('./content/practice.txt', sentence, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    writeFile('./content/practice.txt', username, {flag: 'a'}, (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result, "Am done with appending the name");
    });
    });
