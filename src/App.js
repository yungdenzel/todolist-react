import React, {Component} from 'react';

import Note from './components/Note'
import './App.css';

const styles = {
  outer: {
    borderRadius: 5,
    border: '2px solid gray',
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
  inner: checked => ({
    borderRadius: '50%',
    height: 28,
    width: 28,
    backgroundColor: checked ? 'red' : 'transparent',
    margin: 1,
    transition: 'background-color 0.2s ease',
  })
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: '',
      notes: [],
      checked: false,
    }
  }
    updateNoteText(noteText){
     this.setState({noteText: noteText.target.value}) 
    }
   
    addNote() {
      if (this.state.noteText === '') {return}
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText: ''});
      this.textInput.focus();
    }

    handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          let notesArr = this.state.notes;
          notesArr.push(this.state.noteText);
          this.setState({noteText: ''});
      }
    }
  
  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr})
  }
  editnote(){
    // var todo = this.state.notes;
    // var editodo = notes[i];

   

  }

render() {
  let notes = this.state.notes.map((vol, key) => {
    return <Note key={key} text={vol}
            deleteMethod={ () => this.deleteNote(key)}/>
  })
  return (
    <div className="fluid-container bg-light w-50 mx-auto gron">
      <div className="header h1 text-center mt-md-3">React TodoList </div>
      <div className="card mt-md-3">
      < input  type= "text"ref = {((input) => {this.textInput =input})}
     className = "textInput" placeholder="write your todo here" value ={this.state.noteText}onChange={noteText => this.updateNoteText(noteText)}
     onKeyPress ={this.handleKeyPress.bind(this)}/>     
        <div className="btn btn-success " onClick={this.addNote.bind(this)}>Enter</div>
         <div style={styles} className =" list-group list-group-flush text-center notes mt-md-3"/> 
        {notes}  
     </div>
     </div>
  );
}
}
export default App;
