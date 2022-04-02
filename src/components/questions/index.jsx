import React , { useState , useEffect} from 'react';
import useGetQuestions from '../../Hooks/useGetQuestions'
import { useSelector , useDispatch } from 'react-redux';
import { updateIndex } from '../../Redux/Actions'

import {Progressbar, Card , Item} from '../../Common';
import './questions.scss';
const Questions = () => {
  const questions = useSelector(state=>state.quiz.allQuestions)
  const index = useSelector(store=>store.quiz.index)
  const loading = useSelector(state=>state.quiz.loading)
  let dispatch = useDispatch()
  const [fetchQuestion] = useGetQuestions()

  const [allQuestion, setAllQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(()=>{
      fetchQuestion()
    },[])


    return  (
         <div className="questions-page">
           <div className='header'>
           <section className="wrapper-progressbar">
            <Progressbar progressValue={5}/>
          </section>
          <section className="wrapper-question">
            <Card
              current={index} 
              max={questions.length}
              question={' what did early chirstains view as the fruit of evil ?'}/>
          </section>
            {
              loading && <div>loading</div>
            }
          <section className="wrapper-options">

            <div className="list-items">
                <ul className="list">
                  <li className="item">
                    <Item                   
                      lable="Fig"
                      className='correct'
                      onClick={(e)=>dispatch(updateIndex(20))}
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