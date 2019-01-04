import React, { Component } from 'react';
import { FlatList, StyleSheet, View , ScrollView} from 'react-native';
import { Content, Text,  ListItem, Body, Item, 
    Left, Thumbnail, CheckBox, Icon, Button, Input } from 'native-base';
import { NO_IMAGE, COLORS } from '../../constants'

class ListSearchProd extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View >
                <View style={ styles.search }>
                    <Item >
                        <Input placeholder='Consultar...'/>
                        <Icon active name='search' />
                    </Item>
                </View>
                <ScrollView>
                <FlatList style={ styles.contentList }
                    data={ data }
                    renderItem={ ({item}) => this.renderItem(item) }
                    keyExtractor={ item=> item.id }
                />
                </ScrollView>
                
            </View>
        )
    }

    renderItem(item){
        return(
            <ListItem avatar>
                <Left>
                    <View >
                        <Thumbnail source={item.image}></Thumbnail>
                        <CheckBox style={styles.checkbox}/>
                    </View>
                </Left>
                <Body> 
                    <Text style={ styles.text }>Ref: { item.ref }</Text>
                    <Text style={ styles.text }>{item.name}</Text>
                    <View style={ styles.content }>
                        <View style={{ flex:1 }}><Text  style={ styles.text }>Estoque: { item.stock }</Text></View>
                        <View style={ styles.contentButtons }>                                
                            <Button transparent style={ styles.button } iconLeft>
                                <Icon
                                    style={{ color:'red' }}
                                    name="ios-remove-circle-outline"/>
                            </Button>
                    
                            <Input  style={ styles.inuppQtd } placeholder="9.999,99"/>
                        
                            <Button transparent style={ styles.button } iconLeft>
                                <Icon name="ios-add-circle-outline"/>
                            </Button>
                        </View>
                    </View>
                    <View style={ styles.content }>
                        <Text style={ styles.text } >R$:{ item.price }</Text>
                        <Text style={ styles.text }>UN: { item.un }</Text>
                        <Text note >Total: R$:{ item.totalPrice } </Text>
                    </View>
                </Body>
            
            </ListItem>
        )

    }
}

export default ListSearchProd;

const styles = StyleSheet.create({
    contentList:{
        paddingBottom: 60,
        top: 50
    },
    checkbox:{
        left: 20
    },
    content:{
        flex: 1,
        flexDirection: 'row'
    },
    contentButtons:{
        // backgroundColor:'red',
        width: '100%',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        right: 0,
        alignContent: 'center',
        height: 26,
        paddingRight: 8
    },
    button:{
        height: '100%',
        padding: 0
    },
    inuppQtd:{
        // backgroundColor: 'blue',
        height: '100%',  
        fontSize: 16,
        paddingBottom:0,
        paddingTop:0,
        borderColor: 'red',
        textAlign: 'right',
        color: '#737373',
        fontWeight: 'bold',
        width:20
    },
    text:{
        fontSize: 15,
        color: COLORS.FOURTH
    },
    search:{
        position: 'absolute',
        zIndex: 50,
        top:0,
        width: '100%',
        backgroundColor: '#e6e6e6'
    }
    

})

const data = [
    {
        id: '125s1d2',
        name: 'Camisa Regata Masculina',
        ref: 'AAS25142',
        stock: 1542,
        price: 1546.65,
        un: 'UN',
        totalPrice: 5847.21,
        image: NO_IMAGE

    },
    {
        id: '125s1d2',
        name: 'Camisa Regata Masculina',
        ref: 'AAS25142',
        stock: 1542,
        price: 1546.65,
        un: 'UN',
        totalPrice: 5847.21,
        image: NO_IMAGE

    },
    {
        id: '125s1d2',
        name: 'Camisa Regata Masculina',
        ref: 'AAS25142',
        stock: 1542,
        price: 1546.65,
        un: 'UN',
        totalPrice: 5847.21,
        image: NO_IMAGE

    },
    {
        id: '125s1d2',
        name: 'Camisa Regata Masculina',
        ref: 'AAS25142',
        stock: 1542,
        price: 1546.65,
        un: 'UN',
        totalPrice: 5847.21,
        image: NO_IMAGE

    },
    {
        id: '125s1d2',
        name: 'Camisa Regata Masculina',
        ref: 'AAS25142',
        stock: 1542,
        price: 1546.65,
        un: 'UN',
        totalPrice: 5847.21,
        image: NO_IMAGE

    }
]