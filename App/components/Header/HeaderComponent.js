import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class HeaderComponent extends Component {
  constructor(props){
    super(props);    
  }

    render() {
      const {title} = this.props;
      return (     
          <Header>
            { this.buttonGoBack() }
            <Body>
              <Title>{ title }</Title>
            </Body>
            <Right>
              <Button transparent
                onPress={ () => this.toogleDrawer() }
              >
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
       
      );
    }

    toogleDrawer(){
      const { navigation } = this.props;
      navigation.toggleDrawer();
    }

    buttonGoBack(){

      try{
        const { canBack } = this.props;
        if(canBack){
          return(
            <Left>
              <Button transparent
                onPress={ ()=> this.props.navigation.goBack() }
              >
                <Icon name='arrow-back' />
              </Button>
            </Left>
          )
        }        
    
      }catch(e){
        return(
          null
        )
      }
      
    }
  }

  export default HeaderComponent;