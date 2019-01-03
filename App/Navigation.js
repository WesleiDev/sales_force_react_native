import { createStackNavigator, createAppContainer, createDrawerNavigator, 
    DrawerItems, SafeAreaView } from 'react-navigation';
import SaleScreen from './components/screens/SaleScreen';
import FormSalesScreen from './components/screens/FormSalesScreen';
import PersonScreen from './components/screens/PersonScreen';
import { ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Text} from 'native-base';
import SideBar from './SideBar'


const optSales = { 
    screen: SaleScreen,
    navigationOptions:{
        title: 'Pedidos'
    }
}


const optFormSales = { 
    screen: FormSalesScreen,
    navigationOptions:{
        title: 'Pedido'
    }
} 

const optPerson = {
    screen:PersonScreen,
    navigationOptions:{
        title: 'Cliente'
    } 
}



const CustomDrawerContentComponent = (props) => (
    <SideBar props={props}/>
)

const AppNavigator = createDrawerNavigator(
    {
        Sales: optSales ,
        FormSales: optFormSales, 
        Person: optPerson      
    },
    {
        initialRouteName:'Sales',
        contentComponent : CustomDrawerContentComponent,
        useNativeAnimations: true,
        drawerLockMode: "unlocked"

    }
  )

  
export default createAppContainer(AppNavigator)