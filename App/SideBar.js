import React, { Component } from 'react';
import { View,  ScrollView, FlatList,  Alert, StyleSheet, Image} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Container, Header, Content, Text, ListItem, Icon, Right, Body, Label } from 'native-base';
import { COLORS, LOGO_INTERATIVA } from './constants';


class SideBar extends Component{
    constructor(props){
        super(props);
        console.log('PROPS SIDEBAR:', this.props)
    }
    render(){
        const {props} = this.props;
        return(
            <ScrollView>         
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                <Container>
                    <View style={styles.header}>
                        <View style={ styles.contentImage }>
                            <Image source={LOGO_INTERATIVA} style={ styles.logo }/>
                        </View>
                        <View style={ styles.contentInfo }>
                            <Label style={ styles.labelHeader }>Aqui Soft Distribuidora</Label>
                            <Label style={ styles.labelHeader }>Weslei</Label>
                        </View>
                    </View>
                    <Container>
                        <FlatList data={route}  
                            renderItem={ ({item}) => this.renderItem(item) }
                        />
                    </Container>
                </Container>
                </SafeAreaView> 
            </ScrollView>
        )
    }

    renderItem(item){
        return(      
            <View >
                <ListItem   onPress={ () => this.props.props.navigation.navigate(item.route)  } >                                        
                    <Body>
                        <Text>{ item.name }</Text>
                    </Body>
                    <Right>
                        <Icon name={ item.icon }/>
                    </Right>     
                </ListItem>
            </View>               
             
        )
    }

    
}

export default SideBar;

const route = [
    {
        route:'Sales',
        name: 'Pedidos',
        icon: 'menu'
    },
    {
        route:'Person',
        name: 'Clientes',
        icon: 'person'
    }
]

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'red',
        width: '100%'
    },
    header:{
        height:150,
        width: '100%',
        backgroundColor: COLORS.PRIMARY
    },
    logo:{
        width: '60%',
        height: 70,
    },
    contentImage:{
        flex: 1,
        alignItems: 'center',
        top: 10
    },
    labelHeader:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    contentInfo:{
        padding: 3,
        paddingBottom: 10
    }
})