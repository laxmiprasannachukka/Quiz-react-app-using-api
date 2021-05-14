import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { GetQuizData} from './questionaire';
import {useHistory} from 'react-router-dom';
//import Addquestions from './addquestions';




function Quizcardbody(){
    let [quizData,setquizData]=useState([]);
    let redirect=useHistory()
    useEffect(async()=>{
        let quiz=await GetQuizData();
        setquizData(...quizData,quiz.data);
     // console.log(quiz.data)
    },[]);
return (
    <> {
    quizData.map((item,index)=>{
       // console.log(item)
            return <div class="col-4">
            <div class="card" key={index}>
            <div class="card-body">
                <h4 class="card-title">{item.category}</h4>
                <p class="card-text">{item.description}</p>
                <Link to={`/addQuestion/${item.id}`}> <button class="btn btn-primary">Addquestions</button></Link>
                 <Link to={`/test/${item.id}`}>
                            <button class="btn btn-success float-right">Begin Test</button>
                        </Link>
               
                </div>
                </div>
                </div>
                
                
    })
    }
    </>
    );  
    
}

export default Quizcardbody;