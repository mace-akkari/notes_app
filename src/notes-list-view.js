'use strict';

class NoteListView {

  buildHTML(noteList) {
    let startUl = '<ul>';
    let endUl = '</ul>';
    // [startUl, endUl].forEach((i) => console.log(i)); Line above will cause this to fail because of lack of semicolon
    let noteArr = noteList.getNotes().map((note, i) => {
      return `<li><a class='note${i+1}' onClick='viewNote(${i + 1})' href='#'>${note.showNote().slice(0,20)}</a></li>`
    });
    let preview = noteArr.join('');
    return `${startUl}${preview}${endUl}`;
  };
};