import React , { useState , useEffect} from 'react';
import useFetchQuestions from '../../Hooks/useFetchQuestions'
import { useSelector , useDispatch } from 'react-redux';
import { updateIndex , changCorrectAnswer , loading  } from '../../Redux/Actions'
import { decodeHTML } from '../../Global/utils'
import { Progressbar, Card , Item } from '../../Common';
import './questions.scss';

const Questions = () => {
    
  let dispatch = useDispatch()
  useFetchQuestions()

  const encodedQuestions  = useSelector(state=>state.quiz.allQuestions)
  const questionIndex  = useSelector(store=>store.quiz.index)
  const loading = useSelector(state=>state.quiz.loading)
  const correctAnswer = useSelector(state=>state.quiz.correctAnswer)


  const [allQuestion, setAllQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [answers, setAnswer] = useState([])

  useEffect(() => {
    const createNewObject = encodedQuestions.map(item => {
      return {
        ...item,
        question: decodeHTML(item.question),
        correct_answer: decodeHTML(item.correct_answer),
        incorrect_answers: item.incorrect_answers.map(answer => decodeHTML(answer))
      }
    })

    setAllQuestions(createNewObject)
  }, [encodedQuestions])

  const question = allQuestion[questionIndex]
  const answer = question && question.correct_answer

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }


  useEffect(() => {
    if (!question) {
      return;
    }
    let answers = [...question.incorrect_answers]
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)
    setAnswer(answers)
  }, [question])

  const handleListItemClick = (event) => {
    setDisabled(true)
    setAnswerSelected(true)
    setSelectedAnswer(event.target.textContent)


    if(event.target.textContent === answer) {
        dispatch(changCorrectAnswer(correctAnswer + 1))
    }


    if (questionIndex + 1 <= allQuestion.length) {
      
      setTimeout(() => {
        setAnswerSelected(false)
        setSelectedAnswer(null)

        if ( questionIndex + 1  === allQuestion.length ) {
          setDisabled(true)
          dispatch(updateIndex(0))
          dispatch(changCorrectAnswer(0))
        } else {
          setDisabled(false)
          dispatch(updateIndex(questionIndex + 1))
        }
       
      }, 1500)
    }
  
  }

  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }
    if (option === answer) {
      return `correct`
    }
    if (option === selectedAnswer) {
      return `selected`
    }
  }



    return  (
         <div className="questions-page">
           <div className='header'>
           <section className="wrapper-progressbar">
            <Progressbar progressValue={5}/>
          </section>
          <section className="wrapper-question">
            <Card
              current={correctAnswer} 
              max={encodedQuestions.length}
              question={question?.question}/>
          </section>
            {
              loading && <div>loading</div>
            }
          <section className="wrapper-options">

            <div className="list-items">
                <ul className="list">
                  {
                    answers.map((answer)=>(
                      <li  key={answer} className="item">
                        <Item
                          key={answer} 
                          disabled={disabled}                
                          lable={answer}
                          className={getClass(answer)}
                          onClick={handleListItemClick}
                          />
                    </li>
                    ))
                  }
                </ul>
            </div>
            
          </section>
              
           </div>
         </div>
     )}

export default Questions