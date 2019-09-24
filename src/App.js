import React, {Component} from "react";

export default class Test extends Component{
  state = {
    notes: ['first note', 'second note'],
    name: 'dfsdf'
  }

  render(){    
    return <div className="container mx-auto p-8">
      <NoteAdder FF={ messagge => this.setState({notes: [...this.state.notes, messagge]}) } />
      <div className="flex flex-wrap">
        {this.state.notes.map(note =><NoteComponent text={note} /> )}
      </div>
    </div>
  }
}

class NoteAdder extends Component{
  state = {text: ''}
  render(){
    return <div>
      <button type="button" className="bg-gray-300 p-2" onClick={() => this.props.FF('new note')} >add note</button> <br/><br/><br/>
    </div>
  }
}

class NoteComponent extends Component{
  render(){    
    return <div className="p-8 border m-2">
      {this.props.text}
    </div>
  }
}
