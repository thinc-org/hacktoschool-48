import React, { useState, useEffect } from "react";

export default function user_details() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:4000/user')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const [tokenExists, setTokenExists] = useState(false);
  useEffect(() => {
    // Perform localStorage action
    localStorage.getItem('token') === null ? setTokenExists(false) : setTokenExists(true);
  }, [])

  return (
    <div>
      User Details
      {/* {tokenExists && <div>Name: {data.name}</div>} */}
    </div>
  );
}