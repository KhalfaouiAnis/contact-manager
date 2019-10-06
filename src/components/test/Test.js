import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test",
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2 style={{ color: "red" }}>This is a fucking Test Component</h2>
        <div>
          <h1>{title}</h1>
          <p> {body} </p>
        </div>
      </div>
    );
  }
}

export default Test;
