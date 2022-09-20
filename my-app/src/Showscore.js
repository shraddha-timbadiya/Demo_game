import React, { useState } from 'react'


export default function Showscore(props) {
    const [p1score,setp1score] = useState(0)
    const [p2score,setp2score] = useState(0)
    let diff1 = p1score-p2score
    let diff2 = p2score-p1score

    return (
    <>
    <div className="main_div">
      <div className="main_show">
            <h3 className='left'>{props.player1}</h3>
            <button className='btn btn-primary right' onClick={()=>setp1score(p1score+1)}>Add Win</button>
            <h5>Wins: {p1score}</h5>
            <h3 className='left'>{props.player2}</h3>
            <button className='btn btn-primary right' onClick={()=>setp2score(p2score+1)}>Add Win</button>
             <h5>Wins: {p2score}</h5>
              {
                (p1score > p2score) ? <h2>Current Winner: {props.player1}</h2> :
                (p2score > p1score) ? <h2>Current Winner: {props.player2}</h2> : 
                (p1score === p2score) ? null : null 
             }
             {
              (p1score > p2score) ?  <h2>Win Difference: {diff1}</h2> :
              (p2score > p1score) ?  <h2>Win Difference: {diff2}</h2> : 
              (p1score === p2score) ?  <h2>Win Difference: 0 </h2> :null

             }
            <button className='btn btn-primary'>Save Game</button>
       </div>
       </div>
    </>
  )
}
