import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<String>("");
  const [resetToggle, setRestToggle] = useState(-1)

    // Get all users when loading the page
    useEffect(()=>{
        setError("")
        const {request, cancel} = userService.getAll<User>()
        request.then((res)=>{
          setUsers(res.data)
          console.log(res.data)
        })
        .catch((err)=>{
          if (err === CanceledError)
          setError(err.message)
        })
    
        return () => cancel()
      }, [resetToggle])

    return {users, error, resetToggle, setUsers, setError, setRestToggle}
};

export default useUsers;
