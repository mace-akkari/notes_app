class SingleNote {
  #message;

  constructor(message) {
    this.#note = message
  }

  showNote() {
    return this.#message;
  }
}