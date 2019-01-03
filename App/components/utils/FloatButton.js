// É necessário passar por parâmetro um callback para a evento onpress
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Text, Icon } from 'native-base';
import { COLORS } from '../../contants';

class FloatButton extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableHighlight style={styles.floatButton}
                onPress={ () => this.props.onPress() }
                underlayColor={ COLORS.PRIMARY }
            >
                <Text><Icon name="add"/></Text>
            </TouchableHighlight> 
        ) 
    }
}

const styles = StyleSheet.create({
    floatButton:{ 
        backgroundColor:COLORS.PRIMARY, 
        width:50, 
        height:50, 
        position:'absolute',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 70,
        right: 30

    }
})

export default FloatButton;