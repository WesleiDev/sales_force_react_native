import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../Header/HeaderComponent';

class SarchProdScreen extends Component{
    render(){
        return(
            <Container>
                <HeaderComponent 
                navigation={ this.props.navigation } 
                canBack 
                title="Consulta"/>
                <Text>Consulta de produtos na venda</Text>
            </Container>
        )
    }
}

export default SarchProdScreen;