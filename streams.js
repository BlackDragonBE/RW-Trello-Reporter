const fs = require('fs');

// streams

const readStream = fs.createReadStream('./board_data.json', {encoding:'utf8'})
const writeStream = fs.createWriteStream('./new_file.json')

// readStream.on('data', (chunk) => {
//     console.log('new chunk');
//     console.log(chunk);

//     writeStream.write('\mMEW CHUNK\n')
//     writeStream.write(chunk)
// })

// piping

// readStream.pipe(writeStream);