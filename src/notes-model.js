class SingleNote {
  #note;

  constructor(message) {
    this.#note = message
  }

  showNote() {
    return this.#note;
  }
}