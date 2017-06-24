import React , { Component } from 'react';
import './app.css';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        console.log("this.props", this.props)
    }
    
    changeTopic(e){
        console.log(e.target.value)
    }
    addTopic(e , k){
        e.preventDefault();
        var text1 = this.refs.topic.value;
        console.log(text1);
        console.log(k);
        this.props.topicAdd(text1 , k);
        this.refs.topic.value =""
    }
 
    render(){
        return (
        <div>
          <ul className="list-group">
              <div>
                      
                  {    
                      this.props.subjects.map((data,k)=> {
                          return <li key={data.id}>{data.name}
                               
                              <ul> 
                                  <form className="form-group" onSubmit={(e)=>this.addTopic(e , k)}>
                                      <input type="text" ref="topic" onChange={(e)=>this.changeTopic(e)} placeholder="Enter new topic"/>
                                      <button className="btn btn-primary">Add Topic</button></form>
                                  {
                                        data.topic.map(data1=>{
                                            return <li key={data1.id}>{data1.name}
                                                
                                                <ul>
                                                    <form className="form-group"><input type="text" placeholder="Enter new notes" /><button className="btn btn-primary">Add Notes</button></form>
                                                   
                                                    {
                                                        
                                                            data1.notes.map(data2=>{
                                                                return <li key={data2.id}>{data2.name}
                                                                 
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