import React from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { PostQuizData } from './questionaire';
import {useState,useEffect} from 'react';



function Createquiz(){
    let [category,setcategory]=useState("");
    let [description,setdescription]=useState("");
    let [timer,settimer]=useState();
    let [questions,setquestions]=useState([]);
    let history = useHistory();
   

    async function createcard(e){
        e.preventDefault();
        let userData={
            category,description,timer,questions
        }
        await PostQuizData(userData);
        setTimeout(() => {
            history.push('/');
         }, 2000);
    }
return (
    <>
 <form onSubmit={(e)=>createcard(e)}>
        <div class="container">
        <div class="row">
        <div className="col-lg-6">
        <label>category</label>
        <input className="form-control" type="text" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
        </div>
        <div className="col-lg-6">
        <label>description</label>
        <input className="form-control" type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
        </div>
        <div className="col-lg-6">
        <label>Timer</label>
        <input className="form-control" type="text" value={timer} onChange={(e)=>{settimer(e.target.value)}}/>
        </div>
        </div>
        <div class="row">
        <div className="col-lg-3">
        <button className="btn btn-primary" style={{marginTop:"10px"}}>submit</button>
       </div>
       </div>
        </div>
        </form>
        </>
    )
}

    



export default Createquiz;