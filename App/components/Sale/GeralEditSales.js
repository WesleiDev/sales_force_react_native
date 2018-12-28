import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Item, Label, Button, Container } from 'native-base';
import { Stylesheet } from 'react-native';

class GeralEditSales extends Component{
    render(){
        return(
            <Container>
               <Card>
                    <CardItem>
                        <Body>
                            <Button style={{ width:'100%', marginBottom:10 }}>
                                <Text>Selecione um cliente</Text>
                            </Button>
                            <Label>Cliente: </Label>
                            <Label>CPF/CNPJ:</Label>
                            <Label>Cidade/UF:</Label>
                            <Label>Fone:</Label>
                        </Body>
                    </CardItem>
                </Card> 
                <Card>
                    <CardItem>
                        <Body>
                            <Label>Cliente: </Label>
                            <Label>CPF/CNPJ:</Label>
                            <Label>Cidade/UF:</Label>
                            <Label>Fone:</Label>
                        </Body>
                    </CardItem>
                </Card> 
            </Container>
            
            
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 10
    }
})

export default GeralEditSales;