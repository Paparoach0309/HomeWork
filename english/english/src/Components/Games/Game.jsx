import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import CheckMode from './CheckMode';
import WriteMode from './WriteMode';

 export default (props) => {
     const location = useLocation()
     return (
         <div className="game-page">
             <NavLink to='/training'>
                <button className="btn-exit">
                    Exit 
                </button>
             </NavLink>
             <div className="points-block">
                <span className="correct-title">Correct: </span>
                <span className="error-title">Error: </span>
             </div>
            {location.pathname === '/training/check-mode' ? 
                <CheckMode 
                    setScore={props.setScore}
                    score={props.score}
                /> : 
            location.pathname === '/training/write-mode' ? <WriteMode /> : null}
         </div>
     )
 }