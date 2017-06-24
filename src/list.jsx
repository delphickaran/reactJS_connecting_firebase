import React , { Component } from 'react';
import './app.css';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue :""
        }
        console.log("this.props", this.props)
    }
    
    changeTopic(e){
        console.log(e.target.value)
        this.setState({inputValue : e.target.value})
    }
    addTopic(e , k){
        e.preventDefault();
        var text1 = this.state.inputValue;
        console.log(text1);
        console.log(k);
        this.props.topicAdd(text1 , k);
        this.setState({inputValue : ""})
    }
    
    changeNotes(e){
        console.log(e.target.value)
        this.setState({inputValue : e.target.value})
    }
    addNotes(e , k , key){
        e.preventDefault();
        var text1 = this.state.inputValue;
        console.log(text1);
        console.log(k + " " + key);
        this.props.notesAdd(text1 , k , key);
        this.setState({inputValue : ""})
    }
    
 
    render(){
        return (
        <div>
          <ul className="list-group">
              <div>
                      
                  {    
                      this.props.subjects.map((data,k)=> {
                          return <li key={data.id}>{data.name} 
                               <button onClick={this.props.deleteSubject.bind(null,k)}>X</button>
                              <ul>
                                  
                                  <form className="form-group" onSubmit={(e)=>this.addTopic(e , k)}>
                                      <input type="text" ref="topic" onChange={(e)=>this.changeTopic(e)} placeholder="Enter new topic"/>
                                      <button className="btn btn-primary">Add Topic</button></form>
                                  {
                                        data.topic.map((data1 , key)=>{
                                            return <li key={data1.id}>{data1.name} <button onClick={this.props.deleteTopic.bind(null,k,key)}>X</button>
                                                
                                                <ul>
                                                    <form className="form-group" onSubmit={(e)=>this.addNotes(e , k , key)}>
                                                        <input type="text" value={this.state.inputValue} placeholder="Enter new notes" onChange={(e)=>this.changeNotes(e)} />
                                                        <button className="btn btn-primary">Add Notes</button>
                                                    </form>
                                                   
                                                    {
                                                        
                                                            data1.notes.map((data2,key2)=>{
                                                                return <li key={data2.id}>{data2.name} <button onClick={this.props.deleteNote.bind(null,k,key,key2)}>X</button>
                                                                 
                                                                    </li>
                                                            })
                                                        }
                                                    
                                                </ul>
                                            </li>
                                        })  
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