import React from 'react';
import { useNavigate  } from "react-router-dom";

import {Input , Button} from '../../Common'
import './questions.scss'

const Questions = (props) =>{
    console.log(props)
    let history = useNavigate ();
    return  (
         <div className="questions-page">
             <h1 className="title">Hi!</h1>
             <h3 className='name-user'>qoustion s </h3>

             <h3 className='ask'>What's your name?</h3>
             <Input onChange={(e)=>console.log(e.target.value)} placeHolder='your name'/>
             <Button
              lable='start game' 
              type='sucess'
            //   disabled
              onClick={(e)=> history('/questions') } />
         </div>
     )}

export default Questions