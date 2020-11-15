`use strict`

class Notes {

  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;

  }

  addNote(text) {
    let note = new SingleNote(text);
    this.notes.push(note);
  }
}