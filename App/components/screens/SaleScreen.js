import React, { Component } from 'react';
import  ListSalesComponent  from '../ListSales';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Container, Header, Content, List } from 'native-base'; 


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
        {/* <Header /> */}
        <Content>
        <ListSalesComponent></ListSalesComponent>
        </Content>
      </Container>      
                          
        )
    }
}

const AppNavigator = createStackNavigator({
    Sales:{
        screen:SaleScreen
    }
})

export default createAppContainer(AppNavigator);



