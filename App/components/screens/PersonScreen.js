import React, { Component } from 'react';
import ListPersonComponent from '../Person/ListPersonComponent';
import { Container } from 'native-base';
import HeaderComponent from '../Header/HeaderComponent';

class PersonScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <HeaderComponent title="Clientes"
                    navigation={ this.props.navigation }
                />
                <ListPersonComponent navigation={ this.props.navigation }/>
            </Container>           
        )
    }
}

export default PersonScreen;