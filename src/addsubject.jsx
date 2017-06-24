import React,{Component} from 'react';
import './app.css';

class Addsubject extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
        }
   change(){
      console.log("changing...");
  }
    submit(e){
        e.preventDefault();
        var text = this.refs.subject.value.trim();
        console.log(text);
        if(!text){
            alert("enter a subject");
        }
        this.props.addSubject(text);
       this.refs.subject.value="";
    }
    
    render(){
        return(
            <div>
               <form className="form-group" onSubmit={(e)=>this.submit(e)}><input type="text" ref="subject" onChange={()=>this.change()} placeholder="Enter new subject"/><button  className="btn btn-primary">Add Subject</button></form>
            </div>
        )
    }
}
export default Addsubject;
