import { React, Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Text, Icon } from 'native-base';
import { COLORS } from '../../contants';

class FloatButton extends Component{

  
    render(){
        return(
            <View style={styles.floatButton}>
                <Text>ASASAS</Text>
            </View> 
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
        bottom: 65,
        right: 30

    }
})

export default FloatButton;