import React from "react";

export default function user_details() {
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

  return <div>User details</div>;
}
