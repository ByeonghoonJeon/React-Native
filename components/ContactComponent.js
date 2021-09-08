import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

function RenderContactCard() {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>1 Nucamp Way </Text>
          <Text>Seattle, WA 98001 </Text>
          <Text>U.S.A.</Text>
          <Text> </Text>
          <Text>Phone: 1-206-555-1234</Text>
          <Text style={{ marginBottom: 10 }}>Email: campsites@nucamp.co</Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
}
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Contact",
  };
  render() {
    return (
      <ScrollView>
        <RenderContactCard />
      </ScrollView>
    );
  }
}

export default Contact;
