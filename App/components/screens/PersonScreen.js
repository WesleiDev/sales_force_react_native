import React, { Component } from 'react';
import ListPersonComponent from '../Person/ListPersonComponent';

class PersonScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <ListPersonComponent navigation={ this.props.navigation }/>
           
        )
    }
}

export default PersonScreen;