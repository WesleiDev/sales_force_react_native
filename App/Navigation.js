import { createStackNavigator, createAppContainer } from 'react-navigation';
import SaleScreen from './components/screens/SaleScreen';
import EditSalesScreen from './components/screens/EditSalesScreen';

const optSales = { 
    screen: SaleScreen,
    navigationOptions:{
        title: 'Pedidos'
    }
} 

const optEditSales = { 
    screen: EditSalesScreen,
    navigationOptions:{
        title: 'Pedido'
    }
} 

const AppNavigator = createStackNavigator(
    {
        Sales: optSales ,
        EditSales: optEditSales,       
    },
    {
        initialRouteName:'Sales'
    }
  )
  
export default createAppContainer(AppNavigator)