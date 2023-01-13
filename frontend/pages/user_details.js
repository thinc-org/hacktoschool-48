import React from "react";

export default function user_details() {
  const showUserdetail = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const jsonData = {
      email: data.get("email"),
      name: data.get("name"),
      surname: data.get("surname"),
      courses: data.get("courses"),
      role: data.get("role"),
    };
    console.log(
      data.get("email"),
      data.get("name"),
      data.get("surname"),
      data.get("courses"),
      data.get("role")
    );

    const API_URL = "http://localhost:4000/user";

    fetch(API_URL, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "userDetails");
      });
  };
  return <div>User details</div>;
}
