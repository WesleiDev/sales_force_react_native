import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import { Container, Text, Tab, Tabs, TabHeading, Icon, Button } from 'native-base';
import  FormGeralSales  from '../Sale/FormGeralSales';
import ItemSalesEdit from '../Sale/FormItemSales';
import { COLORS } from '../../contants';

class FormSalesScreen extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            
            <Container>
                
                <Tabs >
                    <Tab 
                        heading={ <TabHeading><Icon name="apps" /><Text>Geral</Text></TabHeading>}>
                        <ScrollView>
                            <FormGeralSales navigation={ this.props.navigation } />
                        </ScrollView>
                    
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="cart" /><Text>Produtos</Text></TabHeading>}>
                        <ItemSalesEdit/>
                    </Tab>
                </Tabs>
                <View  style={styles.footer}>
                    <Text style={ styles.textFooter } >Total Pedido: R$300,00 Total Produtos: R$150,00</Text>     
                    <View style={ styles.buttonsFooter }>
                        <Button danger style={ styles.button } onPress={ ()=> this.props.navigation.navigate('Sales') }><Text>Cancelar</Text></Button>
                        <Button style={ styles.button } ><Text>Salvar</Text></Button>
                    </View>             
                </View>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    footer:{ 
        bottom:0, 
        position:'absolute', 
        zIndex:50,
        backgroundColor: '#f2f2f2',
        padding: 5,
        width: '100%'
    },
    button:{
        height: 30,
        padding:5,
        width: '45%'
    }, buttonsFooter:{
        flexDirection:'row', 
        justifyContent: 'space-between',
        padding:2
    },
    textFooter:{
        fontSize:15,
        color: COLORS.FOURTH
    }
})
export default FormSalesScreen;
