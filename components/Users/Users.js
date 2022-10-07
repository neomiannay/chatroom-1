import React, { useEffect, useState } from "react";


import { UsersContainer } from "./Users.styles";

function Users({ socket }) {

  const [users, setUsers] = useState([]);
  const [userAmount, setUserAmount] = useState(0);

  useEffect(() => {
    const usersListener = (users) => {
        setUsers(users);
        setUserAmount(users.length);
    }

    const newUserListener = user => setUsers(prevUsers => {
      return [...prevUsers, user]
    })

    const deleteUserListener = (userID) => {
      setUsers((prevUsers) => {
        const newUsers = { ...prevUsers };
        delete newUsers[userID];
        return newUsers;
      });
    };

    const updateUsername = (user) => {
      setUsers(prevUsers => {
        prevUsers[user.id] = user
        return prevUsers;
      })
    }

    socket.on("users", usersListener);
    socket.on("userConnection", newUserListener);
    socket.on("updateUsername", updateUsername);
    socket.on("deleteUser", deleteUserListener);
    socket.emit("getUsers");

    return () => {
      socket.off("users", usersListener);
      socket.off("userConnection", newUserListener);
      socket.off("updateUsername", updateUsername);
      socket.off("deleteUser", deleteUserListener);
    };
  }, [socket, users]);

  return (
    <UsersContainer>
      <div>
        {users
            .sort((a, b) => a.name - b.name)
            .slice(0, 5)
            .map((user, index) => (
                <div key={index}>
                  <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_49_193)">
                      <path d="M21.9463 22.9068C21.853 22.9767 21.793 23.0745 21.7796 23.1933C21.653 24.1158 21.173 28.253 22.9463 28.253C24.9063 28.253 34.1063 28.253 34.993 36.4995C35.0196 36.7581 34.8196 36.9887 34.5663 36.9887H0.4263C0.172967 36.9887 -0.0336997 36.7511 -0.000366401 36.4856C1.01963 29.3013 9.9863 29.2873 11.9396 28.6025C13.693 27.9875 13.393 24.1438 13.2996 23.2143C13.2863 23.0885 13.2196 22.9767 13.1196 22.8998C12.1063 22.159 6.51297 17.5955 8.93963 8.68507C11.613 -1.09892 18.9463 0.997651 18.9463 0.997651C18.9463 0.997651 26.2796 0.997651 26.2796 13.5771C26.2796 19.2029 22.6996 22.3128 21.9463 22.9068V22.9068Z" fill="#FCFBFB"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_49_193">
                        <rect width="35" height="36.1798" fill="white" transform="translate(0 0.80896)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span key={user.id} className="user">
                      {user.name}
                  </span>
                </div>
            ))
        }
        {userAmount > 5 &&
          <p>
            +
            {userAmount === 6 ? " 1 participant" : ` ${userAmount - 5} participants`}
          </p>
        }
      </div>
    </UsersContainer>
  );
}

export default Users;
