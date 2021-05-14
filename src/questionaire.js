import axios from "axios";

export function addQuestion(id,data){
    return axios.put(`https://605dc4cf9386d200171bb345.mockapi.io/quizapp/questionaire/${id}`,data);
}

export function GetQuizData(){
    return axios.get(`https://605dc4cf9386d200171bb345.mockapi.io/quizapp/questionaire`);
    }
    export function GetQuizbyId(id){
        return axios.get(`https://605dc4cf9386d200171bb345.mockapi.io/quizapp/questionaire/${id}`);
    }
    export function PostQuizData(data){
        return axios.post(`https://605dc4cf9386d200171bb345.mockapi.io/quizapp/questionaire`,data);
    }
    
    

   