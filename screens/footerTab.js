import React, { Component } from "react";
// import LucyChat from "./LucyChat.js";
// import JadeChat from "./JadeChat.js";
// import NineChat from "./NineChat.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab,Container } from "native-base";

export default class FooterTabsExample extends Component {

  render() {
    return (
      <Container>
      
     
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}