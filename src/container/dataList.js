import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/action'

class UserList extends Component {
    
    createListItems(){
        return this.props.subjects.map((data,k)=> { 
            return (
                <li 
                key={data.id}
                onClick ={()=>this.props.select(data)}
                >
                {data.name}
                       <ul>
                           {
                           this.props.subjects[k].topic.map((topic,key)=>{
                                return (
                                <li key={topic.id}>{topic.name}
                                    
                                    <ul>
                                    {
                                    this.props.subjects[k].topic[key].notes.map((notes,key2)=>{
                                        return(
                                        <li key={notes.id}>{notes.name}</li>
                                        )
                                    })

                                    }
                                    </ul>
                                </li>
                                )
                            })
                           }
                       </ul>
                </li>
            )
        });
    }
    
    render(){
        return (
            <ul>
                
                
                    {this.createListItems()}
            
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        subjects : state.subjects
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select : select}, dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(UserList);