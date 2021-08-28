import React from "react";
import { ScrollView, Text } from "react-native";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "About",
  };
  render() {
    return <ScrollView></ScrollView>;
  }
}

export default About;
