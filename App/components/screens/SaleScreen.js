import React, { Component } from 'react';
import  ListSalesComponent  from '../Sale/ListSales';
import {Container,  Content } from 'native-base'; 
import FloatButton from '../utils/FloatButton';

class SaleScreen extends Component{

    static navigationOptions = {
        title: 'Pedidos',
      };
    constructor(props){
        super(props);
        this.openFormSales = this.openFormSales.bind(this)
    }

    render(){
        return(      
        <Container>
            <Content>
                <ListSalesComponent navigation={ this.props.navigation }></ListSalesComponent>
            </Content>
            <FloatButton onPress={ this.openFormSales}/>
        </Container>      
                          
        )
    }

    openFormSales(){
        const { navigate } = this.props.navigation;
        navigate('FormSales')
    }
}



export default SaleScreen;



