import React from 'react';
import { useSelector} from 'react-redux';

import {Progressbar, Card , Item} from '../../Common';
import './questions.scss';
const Questions = () =>{
 const userName = useSelector(state=>state.quiz.userName)

    return  (
         <div className="questions-page">
           <div className='header'>
           <section className="wrapper-progressbar">
            <Progressbar progressValue={5}/>
          </section>
          <section className="wrapper-question">
            <Card
              current={5} 
              max={10}
              question={' what did early chirstains view as the fruit of evil ?'}/>
          </section>
          
          <section className="wrapper-options">

            <div className="list-items">
                <ul className="list">
                  <li className="item">
                    <Item                   
                      lable="Fig"
                      className='correct'
                      onClick={(e)=>console.log('e.target.value')}
                      />
                  </li>
                  <li className="item">
                    <Item 
                    className='selected'
                      lable="Grape"
                      onClick={(e)=>console.log('e.target.textcontent')}
                      />
                  </li>
                </ul>
            </div>
            
          </section>
              
           </div>
         </div>
     )}

export default Questions