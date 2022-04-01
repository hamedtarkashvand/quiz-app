import React , {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { setUserName } from './../../Redux/Actions'

import {Input , Button} from '../../Common'
import './login.scss'

const Login = () =>{
    let history = useNavigate ();
    const dispatch = useDispatch();
    const [name , setName] = useState('')

    const onSubmitUserName = (event) =>{
      setName(event)
      dispatch(setUserName(event))
    }

    return  (
         <div className="login-page">
             <h1 className="title">Hi!</h1>
             <h3 className='name-user'>{name || ''}</h3>

             <h3 className='ask'>What's your name?</h3>
             <Input onChange={(e)=>onSubmitUserName(e.target.value)} placeHolder='your name'/>
             <Button
              lable='start game' 
              type='sucess'
              disabled={!(!!name)}
              onClick={(e)=> history('/questions') } />
         </div>
     )}

export default Login
