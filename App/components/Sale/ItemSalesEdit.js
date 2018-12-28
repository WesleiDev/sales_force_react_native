import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

class ItemSalesEdit extends Component{
    render(){
        return(
            <Card>
            <CardItem header>
                <Text>Produtos</Text>
            </CardItem>
            <CardItem>
            <Body>
                <Text>
                
                </Text>
            </Body>
            </CardItem>
            <CardItem footer>
                <Text>Total Produtos: R$150,00</Text>
            </CardItem>
        </Card>
        )
    }
}

export default ItemSalesEdit;