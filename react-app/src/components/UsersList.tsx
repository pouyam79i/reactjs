import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import useUsers from "../hooks/useUsers";

const UsersList = () => {

  const {users, error, resetToggle, setUsers, setError, setRestToggle} = useUsers();

  // Update
  const updateUser = (user: User) =>{
    setError("")
    const updatedUser = {...user, name: user.name+"!"}
    setUsers(users.map(u => {return (u.id == user.id) ? updatedUser : u}))
    const originalUsers = users;

    userService.update<User>(updatedUser)
    .catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  // Delete
  const deleteUser = (user: User) =>{
    setError("")
    const originalUsers = users
    setUsers(users.filter(u => u.id !== user.id))

    userService.delete(user.id)
    .catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  // Create
  const addUser = () => {
    setError("")
    const newUser:User = {
      id: 0,
      name: "New Member" 
    } 
    const originalUsers = users
    setUsers([newUser, ...users])
    userService.add<User>(newUser)
    .catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  // reset data
  const toggleRest = () => {
    if (resetToggle === -1)
      setRestToggle(1)
    else
      setRestToggle(-1)
  }

  // render list
  return <div>
    {(error !== "") && <p className="text-danger">Error: {error}</p>}
    <div className="d-flex justify-content-between">
      <button type="button" className="btn btn-primary my-1 mx-1" onClick={()=>{addUser()}}>Add User</button>
      <button type="button" className="btn btn-danger my-1" onClick={()=>{toggleRest()}}>Reset</button>
    </div>
    <ul className="list-group">
      {users.map(user => {return <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name}
       <div><button type="button" className="btn btn-secondary mx-1" onClick={()=>{updateUser(user)}}>Update</button>
      <button type="button" className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete</button></div>
      </li>
      })}
    </ul>
  </div>;
};

export default UsersList;
