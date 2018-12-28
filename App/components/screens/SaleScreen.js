import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  ListSalesComponent  from '../ListSales';


export default class SaleScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(            
            <ListSalesComponent></ListSalesComponent>              
        )
    }


}



