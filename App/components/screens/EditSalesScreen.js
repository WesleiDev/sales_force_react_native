import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

class EditSalesScreen extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Content>
                    <Text>Edit Sales</Text>
                </Content>
            </Container>
        )
    }
}

export default EditSalesScreen;
