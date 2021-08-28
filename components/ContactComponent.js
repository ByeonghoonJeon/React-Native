import React from "react";
import { ScrollView } from "react-native";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Contact",
  };
  render() {
    return <ScrollView></ScrollView>;
  }
}

export default Contact;
