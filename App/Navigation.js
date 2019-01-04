import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SideBar from './SideBar'
import SaleScreen from './components/screens/SaleScreen';
import FormSalesScreen from './components/screens/FormSalesScreen';
import PersonScreen from './components/screens/PersonScreen';
import SearchProdScreen from './components/screens/SearchProdScreen';


const optSales = { 
    screen: SaleScreen,
    navigationOptions:{
        title: 'Pedidos',
        header: null
    }
}


const optFormSales = { 
    screen: FormSalesScreen,
    navigationOptions:{
        title: 'Pedido',
        header: null
    }
} 

const optSearchProd = { 
    screen: SearchProdScreen,
    navigationOptions:{
        title: 'Consulta de Produtos',
        header: null
    }
} 

const optPerson = {
    screen:PersonScreen,
    navigationOptions:{
        title: 'Cliente',
        header: null
    } 
}

const menuStack = createStackNavigator({
    Sales: optSales ,
    FormSales: optFormSales, 
    Person: optPerson, 
    SearchProd: optSearchProd 
    }
)


const CustomDrawerContentComponent = (props) => (
    <SideBar props={props}/>
)

const AppNavigator = createDrawerNavigator(
    {
        menuStack   
    },
    {
        contentComponent : CustomDrawerContentComponent,
        useNativeAnimations: true,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        headerMode: 'none',

    }
  )

  
export default createAppContainer(AppNavigator)