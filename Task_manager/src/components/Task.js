import React from 'react'
import { useState, useEffect } from "react";
import { getAllUsersLists } from './Api';



function Task() {

    const [user, setUser] = useState([]);
    const [id, setId] = useState([]);
    

    useEffect(() => {
        const apiCall = async () => {
          const data = await getAllUsersLists();
          console.log(data.data.users);
          setId(data.data.id)
          setUser(data.data.users)
        };
        apiCall();
      },[]);

  return (
    <div>
        <table className="border-separate border-spacing-2 border w-8/12 inline-table  border-slate-400">
          <thead>
            <tr>
                <th className='border border-slate-300'>ID</th>
                <th className='border border-slate-300'>Name</th>
                <th className='border border-slate-300'>Action</th>
                <th className='border border-slate-300'>Picture</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data,index) => (
                <tr key={index}>
                  <td className='border border-slate-300'>{data.id}</td>
                  <td className='border border-slate-300'>{data.name}</td>
                  <td className='border border-slate-300'><button className='bg-green-400 text-white border rounded-md w-16'>Edit</button>   |   <button className='bg-red-400 text-white border w-16 rounded-md'>Delete</button></td>
                 
                </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Task