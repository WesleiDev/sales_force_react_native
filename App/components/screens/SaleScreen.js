import React, { Component } from 'react';
import  ListSalesComponent  from '../Sale/ListSales';
import {Container,  Content } from 'native-base'; 

class SaleScreen extends Component{

    static navigationOptions = {
        title: 'Pedidos',
      };
    constructor(props){
        super(props)
    }

    render(){
        return(      
        <Container>
            <Content>
                <ListSalesComponent navigation={ this.props.navigation }></ListSalesComponent>
            </Content>
        </Container>      
                          
        )
    }
}



export default SaleScreen;



