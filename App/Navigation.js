import { createStackNavigator, createAppContainer } from 'react-navigation';
import SaleScreen from './components/screens/SaleScreen';
import FormSalesScreen from './components/screens/FormSalesScreen';
import PersonScreen from './components/screens/PersonScreen';

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

const AppNavigator = createStackNavigator(
    {
        Sales: optSales ,
        FormSales: optFormSales, 
        Person: optPerson      
    },
    {
        initialRouteName:'Sales'
    }
  )
  
export default createAppContainer(AppNavigator)