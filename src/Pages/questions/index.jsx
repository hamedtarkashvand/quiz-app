import React , {useEffect, useState} from 'react';
import { useNavigate  } from "react-router-dom";
import useFetchQuestions from '../../Hooks/useFetchQuestions'
import { updateIndex} from '../../Redux/Actions'

import { useSelector , useDispatch } from 'react-redux';
import { Progressbar, Card , ListOptions } from '../../Common';
import './questions.scss';

const Questions = () => {
  let dispatch = useDispatch();
  let history = useNavigate ();
  useFetchQuestions()
  let timerID = {}
  const encodedQuestions  = useSelector(state=>state.quiz.allQuestions)
  const questionIndex  = useSelector(store=>store.quiz.index)

  const loading = useSelector(state=>state.quiz.loading)
  // const correctAnswer = useSelector(state=>state.quiz.correctAnswer)
  
  const [question , setqestion] = useState({})
  

  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    seconds: parseInt(10)
  });

  const tick = () => {
    if (paused || over) return;
    if (time.seconds === 0 && questionIndex + 1 === encodedQuestions.length) {
      stopTime()
    } else if (time.seconds === 0 ) {
      setOver(true);
      dispatch(updateIndex(questionIndex + 1))
    
    } else if (time.seconds > 0 ) {
     
      setTime({
        seconds: time.seconds - 1
      });
    } 

  };

  const resetTime = () => {
    setTime({
      seconds: parseInt(10)
    });
    setPaused(false);
    setOver(false);
  };

  const pausedTime = () => {
    clearInterval(timerID);
    setPaused(false);
    setOver(false);
  };

  const stopTime = (e) => {
    history('/endGame') 
  };


  useEffect(() => {
     timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  },[time,questionIndex]);



    return  (
         <div className="questions-page">
           <div className='header'>
           <section className="wrapper-progressbar">
            <Progressbar valueProgress={time.seconds}/>
          </section>
          <section className="wrapper-question">
            <Card
              current={questionIndex + 1} 
              max={encodedQuestions.length}
              question={question&&question.question}/>
          </section>
            {
              loading && <div>loading</div>
            }
          <section className="wrapper-options">
              {
                encodedQuestions ? <ListOptions 
                encodedQuestions={encodedQuestions}
                onClick={resetTime}
                onChange={pausedTime}
                endList={()=>stopTime()}
                currentQustion={setqestion}
                /> : ''
              }
          </section>
              
           </div>
         </div>
     )}

export default Questions