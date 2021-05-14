import React from 'react';
import { Link } from 'react-router-dom';
import Quizcardbody from './quizcardbody';
function Quizcard() {
    return (
        <>
            <div class="row">
            <div class="col-12">
                <Link to="/createquiz">
                    <button type="button" className="btn btn-primary mb-4">CreateQuiz</button>
                </Link>
            </div>
            </div>
            <div class="row">
                <Quizcardbody></Quizcardbody>
            </div>
        </>
    )
}

export default Quizcard;