import React,{ Component } from 'react';
import List from './list';
import './app.css'
import Addsubject from './addsubject';
import {init as firebaseInit} from './firebase';
import {addSection as add} from './firebase';
import {getSectionsDB as DBdata} from './firebase';
class App extends Component{
    constructor(props){
        super(props);
        firebaseInit()
       
        this.state = {
            subjects: []
            
        }
    }
   
    
    
    handleAddSubject(text){
        var newSubject = {
            id: this.state.subjects.length + 1,
            name: text,
            topic:[]
        }
        var data = this.state.subjects.concat(newSubject)
        this.setState({subjects: this.state.subjects.concat(newSubject)})
        console.log(data)
        add(data);
    }
    
    handleAddTopic(text , k){
        this.state.subjects[k].topic === undefined ? this.state.subjects[k].topic.length === 1 : "hello"
        var newTopic = {
            id: (this.state.subjects[k].topic.length + 1),
            name: text,
            notes:[]
        }
        var data =  this.state.subjects;
        data[k].topic = data[k].topic.concat(newTopic);
        console.log(data);
        this.setState({subjects: data})
        add(data);
        
    }
    
        handleAddNotes(text , k , key){
            console.log(this.state.subjects[k].topic[key].notes.length + 1);
            var newNote = {
            id: this.state.subjects[k].topic[key].notes.length + 1,
            name: text
        }
             var data =  this.state.subjects
             console.log(data[k].topic[key].notes.concat(newNote));
        data[k].topic[key].notes = data[k].topic[key].notes.concat(newNote);
            console.log(data[k].topic[key].notes);
        console.log(data);
        this.setState({subjects: data})
        add(data);
       
    }
    
   deleteSubject(k){  
    console.log( k)

    var data = this.state.subjects;
       console.log(data);
       
      data.splice(k,1);
      console.log(data);
      this.setState({subjects : data})
      add(data);
    }
    deleteTopic(k,key){  
        console.log( k +" " + key)
        var data =  this.state.subjects;
        data[k].topic.splice(key,1);
        console.log(data);
        this.setState({subjects: data})
        add(data);
    }
    deleteNote(k,key,key2){  
        console.log(k + " "+ key +" "+ key2)
        var data =  this.state.subjects
        data[k].topic[key].notes.splice(key2,1);
        console.log(data);
        this.setState({subjects: data})
        add(data);
        
    }
 

    componentDidMount(){
       DBdata().then(val=>{if(val!== null){this.setState({subjects:val})}})
    }
    render(){
        return(
            <div className="App">
                <Addsubject addSubject={(text)=>this.handleAddSubject(text)}/>
                <List subjects={this.state.subjects} topicAdd={(text,k)=>this.handleAddTopic(text , k)} notesAdd={(text,k,key)=>this.handleAddNotes(text , k , key)} deleteSubject={this.deleteSubject.bind(this)} deleteTopic={this.deleteTopic.bind(this)} deleteNote={this.deleteNote.bind(this)}/>
                
            </div>
                  
            )
    }
}

export default App;