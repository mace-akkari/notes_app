`use strict`

class Notes {

  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;

  }

  showNote(text) {
    let note = new Note(text);
    this.notes.push(note);
  }
}