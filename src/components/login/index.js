import React from 'react';
import { useNavigate  } from "react-router-dom";

import {Input , Button} from '../../Common'
import './login.scss'

const Login = (props) =>{
    console.log(props)
    let history = useNavigate ();
    return  (
         <div className="login-page">
             <h1 className="title">Hi!</h1>
             <h3 className='name-user'>Hamed Torkashvand</h3>

             <h3 className='ask'>What's your name?</h3>
             <Input onChange={(e)=>console.log(e.target.value)} placeHolder='your name'/>
             <Button
              lable='start game' 
              type='sucess'
            //   disabled
              onClick={(e)=> history('/questions') } />
         </div>
     )}

export default Login