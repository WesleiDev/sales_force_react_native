import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, List, 
    ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';  
import { ICON_SYNC}  from '../contants';

const ICON_SALES = require('../images/icon_sales.png');

export default class ListSalesComponent extends Component{

    constructor(props){
        super(props);
        this.state = { sales }
    }
    render(){
        return(
            <Container>
        <Header />
        <Content>
          <FlatList data={ this.state.sales }
               renderItem = { ({item}) => this.renderItem(item)} 
          >
          </FlatList>
        </Content>
      </Container>
        )
    }

    renderItem(sale){
        let icon_sync = (sale.sync) ? ICON_SYNC.SYNC : ICON_SYNC.DESYNC;
        return(
            <ListItem avatar>
            <Left>
              <Thumbnail source={icon_sync} />
            </Left>
            <Body>
              <Text>{ sale.name }</Text>
              <Text note> { sale.payment } </Text>
              <Text note> { sale.price } </Text>
            </Body>
            <Right>
              <Text note> { sale.date } </Text>
            </Right>
        </ListItem>
        )

    }
}


const sales = [
    {
        name: "Weslei Ferreira da silva",
        price: 209.98,
        date: '28/12/2018',
        sync: true,
        payment : 'Dinheiro'
    },
    {
        name: "Juliano",
        price: 500.87,
        date: '25/12/2018',
        sync: false,
        payment : 'Cartão'
    },
    {
        name: "ZACA PECAS MARINGÁ",
        price: 999.87,
        date: '26/12/2018',
        sync: false,
        payment : 'Cartão'
    },
    {
        name: "EMBALAGENS MARINGÁ",
        price: 199.88,
        date: '29/12/2018',
        sync: true,
        payment : 'Cheque'
    }
]