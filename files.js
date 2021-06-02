const fs = require("fs");

// Read files

// fs.readFile("./package.json", (err, data) => {

//     if (err) {
//         console.log(err);
//     }

//     console.log(data.toString());
// });

// Write files

// fs.writeFile('./Logs/log.txt', 'hello world', () => {
//     console.log('File was written');
// });

// Directories

// if (!fs.existsSync("./Assets")) {
//   fs.mkdir("./Assets", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("Folder created");
//   });
// }

// Deleting files

// if (fs.existsSync('./deleteme.txt')) {
//     fs.unlink('./deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }

//         console.log('Deleted file');
//     })
// }
