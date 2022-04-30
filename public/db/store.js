// const util = require("util");
// const fs = require("fs");
// const { json } = require("express");
// const readFileAsync = util.promisify(fs.readFile);

// class Store {
//   read() {
//     return readFileAsync("db/db.json", "utf8");
//   }
//   getNotes() {
//     return this.read().then((notes) => {
//       let parsedNotes;
//       try {
//         parsedNotes = [].concat(JSON.parse(notes));
//       } catch (error) {
//         parsedNotes = [];
//       }
//       return parsedNotes;
//     });
//   }
// }

// module.exports = new Store();
