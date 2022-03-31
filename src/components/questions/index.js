import React from 'react';
import {Progressbar} from '../../Common'
import './questions.scss'
import 'react-circular-progressbar/dist/styles.css';

const Questions = () =>{
    return  (
         <div className="questions-page">
           <Progressbar value={5}/>
         </div>
     )}

export default Questions