const fs = require('fs')

fs.readFile('ShortStory.txt', (err, data) => {
    if (err) throw err;
    
    let endSentenceIndicator = "*endSentenceIndicator*";

    let str = data.toString().replace(/\n/g, endSentenceIndicator);
    str = str.replace(/\. /g, "."+ endSentenceIndicator);

    let array = str.split(endSentenceIndicator);
    let filteredArray = array.filter(function (element) {
      return element.match(/[A-Z]/g);
    });


    let sortedArray = filteredArray.sort();
    for (const element of sortedArray) {
        console.log(element);
        console.log('\x1b[33m%s\x1b[0m',"--------------******************Separator")
    }
})






