import React, { Component } from 'react';
import  ListSalesComponent  from '../Sale/ListSales';
import {Container,  Content, Text, Drawer, Button, Icon } from 'native-base'; 
import FloatButton from '../utils/FloatButton';
import SideBar from '../../SideBar'
import HeaderComponent from '../Header/HeaderComponent';


class SaleScreen extends Component{

    constructor(props){
        super(props);
        this.openFormSales = this.openFormSales.bind(this)
    }

    closeDrawer(){
        this.drawer._root.close()
      };
      openDrawer(){
        //   this.drawer._root.open()
         console.log('THIS: ', this.props.navigation)
          this.props.navigation.openDrawer();
        // Alert.alert('ABRIR')
      };

      
    
    render(){
        
        return(    
            <Container
            >
            <HeaderComponent title="Pedidos"
                            navigation={ this.props.navigation }
            />
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



