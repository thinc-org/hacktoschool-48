import React, { Component } from "react";

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch("http://localhost:4000/user", {
      method: "POST",
      crossDomail: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "userdata");
        this.setState({ userData: data.data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div className="user-detail">
        <div>
          <h1>
            User : {this.state.userData.name} {this.state.userData.surname}
          </h1>
        </div>
        <div>
          <h1>Email : {this.state.userData.email}</h1>
        </div>
      </div>
    );
  }
}
