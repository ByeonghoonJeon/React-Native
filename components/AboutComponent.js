import React from "react";

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
