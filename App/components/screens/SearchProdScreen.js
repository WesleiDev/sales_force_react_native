import React, { Component } from 'react';
import { Container, Text, Tab, Tabs, TabHeading, Icon, Button } from 'native-base';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from '../Header/HeaderComponent';
import ListSearchProd from '../Sale/ListSearchProd';
import { COLORS } from '../../constants';

class SarchProdScreen extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <Container>
                <HeaderComponent 
                navigation={ this.props.navigation } 
                canBack 
                title="Produtos"/>
                <ListSearchProd/>
                <View  style={styles.footer}>
                    <View style={ {paddingBottom:5}}>
                        <Text style={ styles.textFooter } >Qtd. Produtos: 10 Total: R$1150,00</Text>
                    </View>     
                    <View style={ styles.buttonsFooter }>
                        <Button danger style={ styles.button } onPress={ ()=> navigation.goBack() }><Text>Cancelar</Text></Button>
                        <Button style={ styles.button } onPress={ ()=> navigation.goBack() }><Text>Salvar</Text></Button>
                    </View>             
                </View>
            </Container>
        )
    }
}

export default SarchProdScreen;

const styles = StyleSheet.create({
    footer:{ 
        bottom:0, 
        position:'absolute', 
        zIndex:50,
        backgroundColor: '#f2f2f2',
        padding: 5,
        width: '100%',
        alignItems: 'center'
    },
    button:{
        height: 30,
        padding:5,
        width: '45%'
    }, buttonsFooter:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    textFooter:{
        fontSize:15,
        color: COLORS.FOURTH
    }
})