import React, { useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  useEffect(
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          authorization: JSON.parse(window.localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {}),
    []
  );

  return <div></div>;
};

export default FriendsList;
