import React , { Component } from 'react';
import './app.css';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputTopic :"",
            inputNote : ""
        }
        console.log("this.props", this.props)
    }
    
    changeTopic(e){
        console.log(e.target.value)
        this.setState({inputTopic : e.target.value})
         
    }
    addTopic(e , k){
        e.preventDefault();
        var text1 = this.state.inputTopic;
        console.log(text1);
        console.log(k);
        if(text1!==""){
        this.props.topicAdd(text1 , k);
            }
        else{
            alert("enter a topic");
        }
        this.setState({inputTopic : ""})
    }
    
    changeNotes(e){
        this.setState({inputNote : e.target.value})
    }
    addNotes(e , k , key){
        e.preventDefault();
        var text1 = this.state.inputNote;
        console.log(text1);
        console.log(k + " " + key);
        if(text1!==""){
        this.props.notesAdd(text1 , k , key);
            }
        else{
            alert("enter a note");
        }
        this.setState({inputNote : ""})
    }
    
 
    render(){
        return (
        <div>
          <ul className="list-inline">
              <div className="subjectList">   
                  {    
                      this.props.subjects.map((data,k)=> {
                          return <li key={data.id}>{data.name} 
                               <button className="btn btn-danger" onClick={this.props.deleteSubject.bind(null,k)}>X</button>
                              <ul> 
                                  <form className="form-group" onSubmit={(e)=>this.addTopic(e , k)}>
                                      <input type="text" ref="topic" onChange={(e)=>this.changeTopic(e)} placeholder="Enter new topic"/>
                                      <button className="btn btn-primary">Add Topic</button></form>
                                  {
                                        data.topic !== undefined ? data.topic.map((data1 , key)=>{
                                            return <li key={data1.id}>{data1.name}
                                                <button className="btn btn-danger" onClick={this.props.deleteTopic.bind(null,k,key)}>X</button>
                                                
                                                <ul>
                                                    <form className="form-group" onSubmit={(e)=>this.addNotes(e , k , key)}>
                                                        <input type="text" value={this.state.inputValue} placeholder="Enter new notes" onChange={(e)=>this.changeNotes(e)} />
                                                        <button className="btn btn-primary">Add Notes</button>
                                                    </form>
                                                   
                                                    {
                                                        
                                                            data1.notes.map((data2,key2)=>{
                                                                return <li key={data2.id}>{data2.name} 
                                                                    <button className="btn btn-danger" onClick={this.props.deleteNote.bind(null,k,key,key2)}>X</button>
                                                                 
                                                                    </li>
                                                            })
                                                        }
                                                    
                                                </ul>
                                            </li>
                                        })  : console.log("no topic")
                                    }
                                  
                              </ul>
                          </li>
                          
                      })
                  }
              </div>
          </ul>
        </div>
            )
    }
}
export default List;