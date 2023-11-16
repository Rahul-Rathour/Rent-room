import React, { useState } from 'react'

export const Login = () => {

  const[action,setaction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action==="Login"?<div></div>:<div className='input'>
                <input type='text' placeholder='Name'></input>
             </div>}
             {/* <div className='input'>
                <input type='text' placeholder='Name'></input>
             </div> */}
             <div className='input'>
                <input type='email' placeholder='E-mail'></input>
             </div>
             <div className='input'>
                <input type='password' placeholder='Password'></input>
             </div>
        </div>
        {action==="Sign Up"? <div/>:<div className='forgot_password'>Lost Password? <span>Click Here</span></div>}
        {/* <div className='forgot_password'>Lost Password? <span>Click Here</span></div> */}
        <div className='submit_container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}} >Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
        </div>
    </div>
  )
}
export default Login