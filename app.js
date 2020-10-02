// Use fs.readFile() method to read the physical file ShortStory.txt.
const fs = require('fs')

fs.readFile('ShortStory.txt', (err, data) => {
    if (err) throw err;
    
    //created a variable to indicate when the sentence is ended.
    let endSentenceIndicator = "*endSentenceIndicator*";
    // use replace method to "replace" all new line character in your string with "endSentenceIndicator" 
    let str = data.toString().replace(/\n/g, endSentenceIndicator);
    str = str.replace(/\. /g, "."+ endSentenceIndicator);

    // Use The split() method to split a string into an array of substrings, and returns the new array. 
    let array = str.split(endSentenceIndicator);
    let filteredArray = array.filter(function (element) {
      return element.match(/[A-Z]/g);
    });

    // Use The sort() method to sorts the elements of an array in place and returns the alphabetical sorted array. 
    let sortedArray = filteredArray.sort();
    for (const element of sortedArray) {
        console.log(element);
        console.log('\x1b[33m%s\x1b[0m',"--------------******************Separator--------------******************")
    }
})






