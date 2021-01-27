import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class Listofgrievance extends Component {
  render() {
    return (
      <Container>
     
        <Content>
          <List>
            <ListItem >
              <Left>
                <Text>Encroachment on public land/property</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Encroachment in Park</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>De-Sealing</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Ongoing Unauthorized Construction</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Misc.</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Right of way related</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Road related</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
             <ListItem>
             <Left>
                <Text>Building Byelaws Violation</Text>
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