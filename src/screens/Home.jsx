import React, { useEffect, useState } from "react";
import { SCREEN_STATE } from "../constants/screen.constants";
import { deleteUser, getAllUsers } from "../services/user.service";

const Home = () => {
  const [users, setUsers] = useState(SCREEN_STATE.PENDING_FETCH);

  useEffect(() => {
    if (users === SCREEN_STATE.PENDING_FETCH) {
      getAllUsers()
        .then((userRes) => {
          setUsers(userRes);
        })
        .catch((err) => {
          setUsers(SCREEN_STATE.FAILED_FETCH);
        });
    }
  }, [users]);

  const handleDelete = (e) => {
    deleteUser(e.target.dataset.id)
      .then((res) => {
        setUsers(SCREEN_STATE.PENDING_FETCH);
      })
      .catch((err) => {
        alert("Can't delete user.");
      });
  };

  return (
    <div>
      <h1>Users</h1>
      {users === SCREEN_STATE.PENDING_FETCH && <h3>Fetching</h3>}
      {Array.isArray(users) && (
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.email}
              <ul>
                <li>{user.firstname}</li>
                <li>{user.lastname}</li>
                <li data-id={user._id} onClick={handleDelete}>
                  Delete
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
