class Note {
  #message;

  constructor(message) {
    this.#note = message
  }

  getNote() {
    return this.#message;
  }
}