import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Test = () => {

    const [data, setData] = useState({
        name:"",
        id:"",
        email:""
    })
    function handleChange(e)
    {
        setData({...data, [e.target.name] : e.target.value})
    }
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try {
            const result = await axios("http:"); 
            toast.success(result.data.messsage);       
        } catch (error) {
            toast.error(error.result.data.message)
            
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                Name:
                </label>
                <input
                    type='text'
                    name='name'
                    maxLength={50}
                    id='name'
                    onChange={handleChange}                
                ></input>
            </div>
            <div>
                <label>
                Id:
                </label>
                <input
                    type='text'
                    name='id'
                    maxLength={50}
                    id='id'
                    onChange={handleChange}                
                ></input>
            </div>
            <div>
                <label>
                Email:
                </label>
                <input
                    type='text'
                    name='email'
                    maxLength={50}
                    id='email'  
                    onChange={handleChange}              
                ></input>
            </div>
            <div>
                <button>Submit</button>
                <button onClick={ ()=> setData({
                    name:"",
                    id:"",
                    email:""
                })}>Reset</button>
            </div>

        </form>
      
    </div>
  )
}

export default Test
