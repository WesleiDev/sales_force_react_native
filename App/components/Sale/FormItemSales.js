import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, FlatList, TouchableHighlight, Alert} from 'react-native';
import { Card, CardItem, Body, Text, ListItem, Left, Thumbnail, Content, Icon} from 'native-base';
import {NO_IMAGE, COLORS} from '../../constants';
import FloatButton from '../utils/FloatButton';

class FormItemSales extends Component{
    constructor(props){
        super(props);

        this.openAddProduct = this.openAddProduct.bind(this);
    }
    render(){
        return(
            <View>                 
                <ScrollView>
                <Card style={{ paddingBottom:50 }}>                   
                    <CardItem>
                        <Content>
                            <FlatList
                            data={ data }
                            renderItem={ ({item}) => this.renderItem(item)  } 
                            keyExtractor= { (item) => item.id }                           
                            >                               
                                
                            </FlatList>
                        </Content>
                    </CardItem>            
                </Card>
                </ScrollView>
             
                <FloatButton onPress={ this.openAddProduct }></FloatButton> 
            </View>
            
            
        )
    }
    openAddProduct(){
        // Alert.alert('Abrir consulta para adicionar produto')
        const {navigate} = this.props.navigation;
        navigate('SearchProd');
    }
    renderItem(item){
        const image = (item.img) ? item.img : NO_IMAGE;

        return(
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={image} />
                    </Left>
                    <Body>
                        <Text style={{ color:COLORS.FOURTH }}>{ item.name } </Text>
                        <Text style={ styles.note }>Unitário: R$ { item.price }</Text>
                        <Text style={ styles.note }>Quantidade: { item.qtd }</Text>
                        <Text style={ styles.note }>Total: R$ { item.totalPrice }</Text>
                    </Body>                 
                </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    note:{
        color: 'dimgrey',
        fontSize: 12
    },
    floatButton:{ 
        backgroundColor:COLORS.PRIMARY, 
        width:50, 
        height:50, 
        position:'absolute',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 65,
        right: 30

    }
    
})
const data = [
    {
        id:"121s51c25df",
        sales_id: "254251#",
        name: "Camisa Regata preta",
        qtd: 56.54,
        price: 100.66,
        totalPrice: 565.98
    },
    {
        id:"121s51c25df",
        sales_id: "254251#",
        name: "Camisa Regata Azul",
        qtd: 50.54,
        price: 78.65,
        totalPrice: 1587.98
    },
    {
        id:"121s51c25df",
        sales_id: "254251#",
        name: "Calça jeans",
        qtd: 56.54,
        price: 78,
        totalPrice: 5847.65
    },
    {
        id:"121s51c25df",
        sales_id: "254251#",
        name: "Chinelo Avaianas",
        qtd: 87.98,
        price: 48.87,
        totalPrice: 787.65
    },
    {
        id:"121s51c25df",
        sales_id: "254251#",
        name: "Camisa Regata preta",
        qtd: 54.98,
        price: 444.65,
        totalPrice: 587.54
    },
    {
        id:"121s51c25df",
        sales_id: "254251#",
        name: "Sapato",
        qtd: 54.98,
        price: 444.65,
        totalPrice: 587.54
    }
]

export default FormItemSales;