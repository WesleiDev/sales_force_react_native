import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

class GeralEditSales extends Component{
    render(){
        return(
            <Card>
            <CardItem header>
                <Text>Informações Gerais</Text>
            </CardItem>
            <CardItem>
            <Body>
                <Text>
                
                </Text>
            </Body>
            </CardItem>
            <CardItem footer>
                <Text>Total: R$200,00</Text>
            </CardItem>
        </Card>
        )
    }
}

export default GeralEditSales;