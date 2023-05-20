import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/balajiraguram");
    const json_data = await data.json();
    console.log(json_data);
    this.setState({ data: json_data });
    console.log("inside componenet did mount" + this.props.name);
    this.timer = setInterval(() => {
      console.log("timer is running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("render" + this.props.name);
    return (
      <>
        <img src={this.state.data.avatar_url} />
        <h2>name : {this.state.data.name}</h2>
        <h3>Company: {this.state.data.company}</h3>
        <h4> Login Name: {this.state.data.login}</h4>
      </>
    );
  }
}

export default ProfileClass;
