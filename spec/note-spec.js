( () => {

  test.that('getNote returns the note text', () => {
    let note = new Note('I am with Ben!');
    expect.toEqual(note.getNote, 'I am with Ben!');
  });

})(this);