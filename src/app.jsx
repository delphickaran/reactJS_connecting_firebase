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
        this.setState({subjects: this.state.subjects.concat(newSubject)})
    }
    
    handleAddTopic(text , k){
        alert(text);
        var newTopic = {
            id: this.state.subjects[k].topic.length + 1,
            name: text,
            notes:[]
        }
        
    }

    render(){
        return(
            <div className="App">
                <Addsubject addSubject={(text)=>this.handleAddSubject(text)}/>
                <List subjects={this.state.subjects} topicAdd={(text,k)=>this.handleAddTopic(text , k)}/>
                
            </div>
                  
            )
    }
}

export default App;