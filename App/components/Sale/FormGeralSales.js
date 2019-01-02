import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Item, 
        Label, Button, Container,Picker, Content, DatePicker, Textarea } from 'native-base';
import { StyleSheet } from 'react-native';

class FormGeraltSales extends Component{
    render(){
        return(
            <Container>
               <Card>
                    <CardItem>
                        <Body>
                            <DatePicker 
                                locale="pr-BR"
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Data do orçamento"
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                            />   
                            <Button style={{ width:'100%', marginBottom:10 }}>
                                <Text>Selecione um cliente</Text>
                            </Button>
                            <Label style ={ styles.text }>Cliente: </Label>
                            <Label style ={ styles.text }>CPF/CNPJ:</Label>
                            <Label style ={ styles.text }>Cidade/UF:</Label>
                            <Label style ={ styles.text }>Fone:</Label>
                            
                        </Body>
                    </CardItem>
                </Card> 
                <Card>
                    <CardItem>
                        <Body style={ styles.container }>                   
                            <Content>
                                <Label style={ styles.label }>Forma de Cobrança</Label>    
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{width: undefined} }                      
                                    >
                                        <Picker.Item label="Selecione" value="-1"/>
                                        <Picker.Item label="Dinheiro" value="key0" />
                                        <Picker.Item label="Cartão" value="key1" />
                                        <Picker.Item label="Boleto" value="key2" />
                                        <Picker.Item label="Cheque" value="key3" />
                                </Picker>
                            </Content>
                            
                            <Content >
                                <Label style={ styles.label }>Condição Pagamento</Label>    
                                <Picker
                                note
                                mode="dropdown"
                                style={{width: undefined} }                      
                                >
                                    <Picker.Item label=" A vista" value="-1"/>
                                    <Picker.Item label="30 + 60" value="key0" />
                                    <Picker.Item label="90 + 120" value="key1" />
                                </Picker>
                            </Content>             
                    
                        </Body>
                    </CardItem>
                </Card> 

                <Card>
                    <CardItem>
                        <Body style={ styles.container }>   
                        <Content>
                            <Label style={ styles.label }>Observações</Label>
                            <Textarea rowSpan={2} bordered placeholder="Observações " />
                            
                        </Content>
                        </Body>
                    </CardItem>
                </Card>
            </Container>
            
            
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 15
    },
    container:{
        flexDirection: 'row',
        marginBottom:0,
        top:0 

    },
    select:{
        flex: 1
    },
    label:{
        fontSize:12,
        fontWeight:'bold'
    }
})

export default FormGeraltSales;