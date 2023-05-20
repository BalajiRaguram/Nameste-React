import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("inside constructor parent");
  }

  componentDidMount() {
    console.log("inside component did mount parent");
  }

  componentWillUnmount() {
    console.log("inside component unmount parent");
  }

  render() {
    console.log("inside render parent");
    return (
      <>
        <h1> Author Information</h1>;
        <ProfileClass name="child 1" />
      </>
    );
  }
}

export default About;
