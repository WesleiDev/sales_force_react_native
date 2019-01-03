import React, { Component } from 'react';
import { FlatList, TouchableHighlight, Alert} from 'react-native';
import {Text, Container, ListItem, Body, Left, Rigth, Content  } from 'native-base';

class ListPersonComponent extends Component{
    constructor(props){
        super(props);
        this.selectPerson = this.selectPerson.bind(this)
    }

    render(){
        return(
            
            <Content>
                <FlatList
                    data={ data }
                    renderItem ={ ({item}) => this.renderItem(item) }
                >
                    
                </FlatList>
            </Content>
       
        )
    }

    renderItem(item){
        return(
                <ListItem>
                    <TouchableHighlight
                    style={{  width: '100%' }}
                    onPress={ () => this.selectPerson(item) }
                    underlayColor={'#fff'}
                    >
                        <Body>
                            <Text>{ item.name }</Text>
                            <Text note>{ item.address }, { item.number }</Text>
                            <Text note>{ item.city } - { item.state } </Text>
                            <Text note>{ item.phone }</Text>
                        </Body>
                    </TouchableHighlight> 
                </ListItem>
                   
        )
    }

    selectPerson(item){
        const { navigation } = this.props;
        navigation.navigate('FormSales', {
            clientSelected: item
        })
    
    }
}

export default ListPersonComponent;

const data = [
    {
        id: '02120012',
        name: 'WESLEI FERREIRA DA SILVA',
        address: 'Travessa liberadde',
        number: 125,
        city: 'Maringá',
        state: 'PR',
        phone: '(44) 3028-2888',
        cpf: '08972934950',
        cnpj: ''
    },
    {
        id: '02120012',
        name: 'EMBALAGENS MARINGÁ',
        address: 'AVENIDA BRASIL',
        number: 125,
        city: 'Maringá',
        state: 'PR',
        phone: '(44) 3028-2888',
        cpf: '',
        cnpj: '80.596.604/0001-81'
    },
    {
        id: '02120012',
        name: 'OLIVEIRA INFORMÁTICA',
        address: 'Travessa liberadde',
        number: 38,
        city: 'Maringá',
        state: 'PR',
        phone: '(44) 3028-2888',
        cpf: '',
        cnpj: '06.141.385/0001-93'
    }
]