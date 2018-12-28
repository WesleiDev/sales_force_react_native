import React, { Component } from 'react';
import { Container, Text, Tab, Tabs, TabHeading, Icon } from 'native-base';
import  GeralEditSales  from '../Sale/GeralEditSales';
import ItemSalesEdit from '../Sale/ItemSalesEdit';

class EditSalesScreen extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Tabs >
                    <Tab 
                        heading={ <TabHeading><Icon name="apps" /><Text>Geral</Text></TabHeading>}>
                    <GeralEditSales/>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="cart" /><Text>Produtos</Text></TabHeading>}>
                        <ItemSalesEdit/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default EditSalesScreen;
