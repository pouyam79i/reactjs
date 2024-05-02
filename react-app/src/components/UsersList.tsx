import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number
  name: string
}

const UsersList = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<String>("");
  const [resetToggle, setRestToggle] = useState(-1)

  // Update
  const updateUser = (user: User) =>{
    setError("")
    const updatedUser = {...user, name: user.name+"!"}
    setUsers(users.map(u => {return (u.id == user.id) ? updatedUser : u}))
    const originalUsers = users;

    // or user .put() 
    axios.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updateUser)
    .catch((err: AxiosError) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  // Delete
  const deleteUser = (user: User) =>{
    setError("")
    const originalUsers = users
    setUsers(users.filter(u => u.id !== user.id))

    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
    .catch((err: AxiosError) => {
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
    axios.post("https://jsonplaceholder.typicode.com/users/", newUser)
    .catch((err: AxiosError) => {
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

  // Get all users when loading the page
  useEffect(()=>{
    setError("")
    const controller = new AbortController();

    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUsers(res.data)
      console.log(res.data)
    })
    .catch((err: AxiosError)=>{
      setError(err.message)
    })

    return () => controller.abort()
  }, [resetToggle])

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
