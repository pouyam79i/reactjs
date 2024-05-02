import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number
  name: string
}

const UsersList = () => {

  const [users, setUsers] = useState<User[]>([])

  useEffect(()=>{
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUsers(res.data)
      console.log(res.data)
    })
    .catch((err: AxiosError)=>{
      console.log(err.message)
    })
  }, [])

  return <div>
    <div className="d-flex justify-content-between">
      <button type="button" className="btn btn-primary my-1 mx-1">Add User</button>
      <button type="button" className="btn btn-danger my-1">Reset</button>
    </div>
    <ul className="list-group">
      {users.map(user => {return <li className="list-group-item d-flex justify-content-between">{user.name}
       <div><button type="button" className="btn btn-secondary mx-1">Update</button>
      <button type="button" className="btn btn-danger">Delete</button></div>
      </li>
      })}
    </ul>
  </div>;
};

export default UsersList;
