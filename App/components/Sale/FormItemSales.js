import React, { Component } from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import { Card, CardItem, Body, Text, Button, List, ListItem, Left, Thumbnail, Right , Content, Container} from 'native-base';
import {NO_IMAGE, COLORS} from '../../contants';
class FormItemSales extends Component{
    render(){
        return(
            <View>
                 
                <ScrollView>
                <Card>                   
                    <CardItem>
                        <Content>
                            <List>
                                <ListItem avatar>
                                <Left>
                                    <Thumbnail source={NO_IMAGE} />
                                </Left>
                                <Body>
                                    <Text style={{ color:COLORS.PRIMARY }}>Camisa regata preta cortada </Text>
                                    <Text style={ styles.note }>Unitário: R$30,51</Text>
                                    <Text style={ styles.note }>Quantidade: 56,00</Text>
                                    <Text style={ styles.note }>Total: R$ 29708,56</Text>
                                </Body>                               
                                
                                </ListItem>
                                <ListItem avatar>
                                <Left>
                                    <Thumbnail source={NO_IMAGE} />
                                </Left>
                                <Body>
                                    <Text style={{ color:COLORS.PRIMARY }}>Camisa regata preta cortada </Text>
                                    <Text style={ styles.note }>Unitário: R$30,51</Text>
                                    <Text style={ styles.note }>Quantidade: 56,00</Text>
                                    <Text style={ styles.note }>Total: R$ 29708,56</Text>
                                </Body>                               
                                
                                </ListItem>
                                <ListItem avatar>
                                <Left>
                                    <Thumbnail source={NO_IMAGE} />
                                </Left>
                                <Body>
                                    <Text style={{ color:COLORS.PRIMARY }}>Camisa regata preta cortada </Text>
                                    <Text style={ styles.note }>Unitário: R$30,51</Text>
                                    <Text style={ styles.note }>Quantidade: 56,00</Text>
                                    <Text style={ styles.note }>Total: R$ 29708,56</Text>
                                </Body>                               
                                
                                </ListItem>
                                <ListItem avatar>
                                <Left>
                                    <Thumbnail source={NO_IMAGE} />
                                </Left>
                                <Body>
                                    <Text style={{ color:COLORS.PRIMARY }}>Camisa regata preta cortada </Text>
                                    <Text style={ styles.note }>Unitário: R$30,51</Text>
                                    <Text style={ styles.note }>Quantidade: 56,00</Text>
                                    <Text style={ styles.note }>Total: R$ 29708,56</Text>
                                </Body>                               
                                
                                </ListItem>
                                <ListItem avatar>
                                <Left>
                                    <Thumbnail source={NO_IMAGE} />
                                </Left>
                                <Body>
                                    <Text style={{ color:COLORS.PRIMARY }}>Camisa regata preta cortada </Text>
                                    <Text style={ styles.note }>Unitário: R$30,51</Text>
                                    <Text style={ styles.note }>Quantidade: 56,00</Text>
                                    <Text style={ styles.note }>Total: R$ 29708,56</Text>
                                </Body>                               
                                
                                </ListItem>
                            </List>
                        </Content>
                    </CardItem>
            
                </Card>
                </ScrollView>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    note:{
        color: 'dimgrey',
        fontSize: 12
    },
    
})
const data = [

]

export default FormItemSales;