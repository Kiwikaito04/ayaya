import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';

function Server() {
    const [listOfStaffs, setListOfStaffs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/staff").then((response) => {
            setListOfStaffs(response.data)
        })
    }, [])
    return <div className='Server'>{listOfStaffs.map((value,key) =>{
        return (
        <div className='staff'>
            <div className='staff'>
                <div className='username'> {value.username} </div>
                <div className='password'> {value.password} </div>
                <div className='permission'> {value.permission} </div>
                <div className='role'> {value.role} </div>
            </div>
        </div>)
        }
    )}
    </div>
}

export default Server