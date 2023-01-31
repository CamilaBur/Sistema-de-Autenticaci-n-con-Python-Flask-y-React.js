import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";


export const SignUp = (props) => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[username,setUsername]=useState("")
    const {store, actions}=useContext(Context)
    
 
    function enviarDatos(e) {
     e.preventDefault()
     actions.signup(email,password, username)
     actions.login(email,password, username)
     setEmail("");
     setPassword("");
     setUsername("");
    }
 
 return (
     <>
     {store.auth === true ? (<Navigate to="/"/>):(
     <form className="w-50 mx-auto" onSubmit={enviarDatos}
     >
       <div className="mb-3 container">
         <label htmlFor="exampleInputEmail1" className="form-label">
           Email address
         </label>
         <input
           type="email"
           className="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
         />
       </div>
       <div className="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">
           New Password
         </label>
         <input
           type="password"
           className="form-control"
           id="exampleInputPassword1"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
         />
       </div>
       <div className="mb-3 container">
         <label htmlFor="exampleInputEmail1" className="form-label">
           Username
         </label>
         <input
           type="username"
           className="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
        value={username}
           onChange={(e)=>setUsername(e.target.value)}
         />
       </div>
       <button  type="submit" className="btn btn-primary">
         Submit
       </button>
       
     </form>
)} 
     </>
     
   );
}