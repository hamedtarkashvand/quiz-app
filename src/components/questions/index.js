import React from 'react';
import {Progressbar, Card , Button} from '../../Common';
import './questions.scss';
const Questions = () =>{
    return  (
         <div className="questions-page">
           <div className='header'>
           <section className="wrapper-progressbar">
            <Progressbar value={5}/>
          </section>
          <section className="wrapper-card">
            <Card
              current={5} 
              max={10}
              question={' what did early chirstains view as the fruit of evil ?'}/>
          </section>

          <section className="wrapper-options">

            <div className="list-items">
                <ul className="list">
                  <li className="item">
                    <Button 
                      lable="option 1"
                      onClick={(e)=>console.log(e.target.textcontent)}
                      
                      />
                  </li>
                </ul>
            </div>

          </section>
              
           </div>
         </div>
     )}

export default Questions