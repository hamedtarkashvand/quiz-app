import { useEffect , useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setQuestions , changLoading } from '../Redux/Actions'

export default () => { 
    const retry  = useSelector(state=>state.quiz.retry)
    const dispatch = useDispatch()
    const apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;
    const fetchQuestion = async () => {
        
        dispatch(changLoading(true))
        await fetch(apiUrl)
             .then((res) => res.json())
             .then((response) => {
               
                 dispatch(changLoading(false))
                 dispatch(setQuestions(response.results))
                
          });
    }    


    useEffect(()=>{
        fetchQuestion()
    },[retry])
}

