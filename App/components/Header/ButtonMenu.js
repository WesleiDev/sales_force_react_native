import React, { Component } from 'react';
import { Text, Icon, Button,Drawer, Content  } from 'native-base';
import { Alert, StyleSheet, View} from 'react-native';
import { COLORS } from '../../contants'
import SideBar from '../../SideBar';

class ButtonMenu extends Component{

    closeDrawer(){
        this.drawer._root.close()
      };
      openDrawer(){
        //   this.drawer._root.open()
        //  console.log('THIS: ', this.drawer._root)
        // Alert.alert('ABRIR')
      };

    render(){
        return(
            <View>
                {/* <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    onClose={() => this.closeDrawer()}
                >
                    
                </Drawer> */}
                <Button 
                    style={ styles.buttonMenu }
                    onPress={ ()=> this.openDrawer() }>
                    <Icon name="menu"/>
                </Button>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    buttonMenu:{
        backgroundColor: COLORS.PRIMARY
    }
})

export default ButtonMenu;