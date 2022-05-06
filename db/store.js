const util = require("util");
const fs = require("fs");
const { json } = require("express");
const { get } = require("http");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json",JSON.stringify(note))
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }
  addNote(note) {
    const { title, text } = note;
    return this.getNotes()
      .then((notes) => [...notes, note])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(()=>note)
  }
}

module.exports = new Store();
