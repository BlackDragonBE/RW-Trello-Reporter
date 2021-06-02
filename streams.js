const fs = require('fs');

const readStream = fs.createReadStream('./board_data.json')

readStream.on('data', () => {

})