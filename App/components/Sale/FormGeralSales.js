import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Item, 
        Label, Button, Container,Picker, Content, DatePicker, Textarea, Grid, Col } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';

class FormGeraltSales extends Component{

    constructor(props){
        super(props);
        this.openSearchPerson = this.openSearchPerson.bind(this);
        const clientSelected = {
            id:'',
            name: '',
            cpf: '',
            cnpj: '',
            city:'',
            state: '',
            phone: ''
        }
        this.state = {clientSelected}
    }

    render(){
        const {clientSelected} = this.state;

        return(
            <Container>
                <NavigationEvents 
                    onDidFocus={payload => this.didFocusNavigation(payload)}
            
                />
               <Card>
                    <CardItem>
                        <Content>
                            <DatePicker 
                                locale="pr-BR"
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Data do orçamento"
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                            />   
                            <Button style={{ width:'100%', marginBottom:10 }}
                                onPress={ () => this.openSearchPerson() }
                                >
                                <Text>Selecione um cliente</Text>
                            </Button>
                            <Label style ={ styles.text }>Cliente: {clientSelected.name} </Label>
                            <Label style ={ styles.text }>CPF/CNPJ:{ clientSelected.cnpj || clientSelected.cpf }  </Label>
                            <Content>
                                <Grid>
                                    <Col ><Label style ={ styles.text }>Cidade/UF:{ clientSelected.city } - { clientSelected.state } </Label></Col>
                                    <Col ><Label style ={ styles.text }>Fone:{ clientSelected.phone }</Label></Col>
                                </Grid>
                            </Content>
                            
                        </Content>
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

    openSearchPerson(){
        const { navigate } = this.props.navigation;
        navigate('Person')
    }

    didFocusNavigation(payload){
        try{
            let { clientSelected } = payload.state.params
            console.log('Outro DID: ', payload)
            if(clientSelected){
                console.log('Cliente selecionado: ', clientSelected)
                this.setState({
                    clientSelected
                })
                console.log('STATE ATUAL: ',this.state)
            }
        }catch(e){

        }
        
        
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