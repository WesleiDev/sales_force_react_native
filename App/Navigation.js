import { createStackNavigator, createAppContainer } from 'react-navigation';
import SaleScreen from './components/screens/SaleScreen';
import FormSalesScreen from './components/screens/FormSalesScreen';

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

const AppNavigator = createStackNavigator(
    {
        Sales: optSales ,
        EditSales: optFormSales,       
    },
    {
        initialRouteName:'Sales'
    }
  )
  
export default createAppContainer(AppNavigator)