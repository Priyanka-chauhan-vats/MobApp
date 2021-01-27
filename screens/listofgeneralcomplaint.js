import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class Listofgenralcomplaint extends Component {
  render() {
    return (
      <Container>
     
        <Content>
          <List>
            <ListItem >
                
           
                                                
              <Left>
                <Text>Electrical Department</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Civil Engineering Department</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Housing(LIG)</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Housing(MIG)</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Housing(HIG)</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Housing(JANTA)</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
            
             <Left>
                <Text>Housing(EHS)</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
             <ListItem>
             <Left>
                <Text>Housing Scheme 2014</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}