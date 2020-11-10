( () => {
  test.that('The message is the same', () => {
    let note = new Note("I am with mace!");
    expect.toEqual(note.showMessage(), "I am with Mace!");
  })
})(this);