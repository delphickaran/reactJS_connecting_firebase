import React,{ Component } from 'react';
import List from './list';
import './app.css'
import Addsubject from './addsubject';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            subjects: [
                {
                    id : 1,
                    name: "Maths",
                    topic: [
                        {
                            id : 1,
                            name: "mtopic",
                            notes: [
                                {
                                    id : 1,
                                    name: "mnotes"
                                },
                                {
                                    id: 2,
                                    name: "mnotes2"
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: "mtopic2",
                            notes: [
                                {
                                    id : 1,
                                    name: "mnotes"
                                },
                                {
                                    id: 2,
                                    name: "mnotes2"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    name: "English",
                    topic: [
                        {
                            id : 1,
                            name: "etopic",
                            notes: [
                                {
                                    id : 1,
                                    name: "enotes"
                                },
                                {
                                    id: 2,
                                    name: "enotes"
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: "etopic2",
                            notes: [
                                {
                                    id : 1,
                                    name: "enotes"
                                },
                                {
                                    id: 2,
                                    name: "enotes"
                                }
                            ]
                        }
                    ]
                    
                }
            ]
            
        }
    }
   
    handleAddSubject(text){
        alert(text);
        var newSubject = {
            id: this.state.subjects.length + 1,
            name: text,
            topic:[]
        }
    console.log(this.state.subjects.concat(newSubject))
        this.setState({subjects: this.state.subjects.concat(newSubject)})
    }
    
    handleAddTopic(text , k){
        alert(text);
        var newTopic = {
            id: this.state.subjects[k].topic.length + 1,
            name: text,
            notes:[]
        }
        var data =  this.state.subjects;
        data[k].topic = data[k].topic.concat(newTopic);
        console.log(data);
        this.setState({subjects: data})
        
    }
    
        handleAddNotes(text , k , key){
        alert(text);
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
       
    }
    
   deleteSubject(k){  
    console.log( k)

    var data = this.state.subjects;
       console.log(data);
       
      data.splice(k,1);
      console.log(data);
      this.setState({subjects : data})
    }
    deleteTopic(k,key){  
        console.log( k +" " + key)
        var data =  this.state.subjects;
        data[k].topic.splice(key,1);
        console.log(data);
        this.setState({subjects: data})
    }
    deleteNote(k,key,key2){  
        console.log(k + " "+ key +" "+ key2)
        var data =  this.state.subjects
        data[k].topic[key].notes.splice(key2,1);
        console.log(data);
        this.setState({subjects: data})
    }
 

    componentWillMount(){
       
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