import React, { useEffect, useState } from "react";
import FriendForm from "./FriendForm";
import { axiosAuth } from "../utils/axiosAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([
    {
      age: 30,
      email: "rachel@friends.com",
      id: 1,
      name: "Rachel Green",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axiosAuth()
      .get("/api/friends")
      .then((res) => {
        setIsLoading(true);
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>L O A D I N G</h2>;
  }

  return (
    <div>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
      <FriendForm setFriends={setFriends} />
    </div>
  );
};

export default FriendsList;
