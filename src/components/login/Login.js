import React from 'react';
import {Input , Button} from '../../Common'
import './login.scss'

const Login = () =>{
    return  (
         <div className="login-page">
             <h1 className="title">Hi!</h1>
             <h3 className='name-user'>Hamed Torkashvand</h3>

             <h3 className='ask'>What's your name?</h3>
             <Input onChange={(e)=>console.log(e.target.value)} placeHolder='your name'/>
             <Button
              lable='start game' 
              type='sucess'
              disabled
              onClick={(e)=>console.log(e.target.textContent)} />
         </div>
     )}

export default Login