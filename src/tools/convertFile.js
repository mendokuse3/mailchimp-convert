const fs = require('fs');
const {convert} = require('./convert');

if (process.argv.length < 3) {
    console.log("no markdown file provided")

    process.exit(1)
}
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err) throw err;
    
    console.log(convert(data))
})

// can run this tool by running:
//  node src/tools/convertFile.js src/tools/sample1.md