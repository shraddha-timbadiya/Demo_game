import React,{useState} from 'react'
import './App.css'
import Showscore from './Showscore'

export default function App() {
  
  const [player1,setplayer1] = useState('')
  const [player2,setplayer2] = useState('')
  const [shownamep1,setshownamep1] = useState()
  const [shownamep2,setshownamep2] = useState()
  
  const continuegame = ()=>{
      setshownamep1(player1)
      setshownamep2(player2)
      setplayer1('')
      setplayer2('')
  }
  return (
    <>
    <div className="main_div">
    <div className="child_div ">
        <input type="text" 
        name='plyr1' 
        value={player1} 
        placeholder='Player 1 Name'
        onChange={(e) =>setplayer1(e.target.value)} /> 

        <input type="text" 
        name='plyr2' 
        value={player2} 
        placeholder='Player 2 Name'
        onChange={(e) =>setplayer2(e.target.value)} /> 
          <button className='btn btn-primary' onClick={continuegame}>Continue</button>
        <Showscore player1={shownamep1} player2={shownamep2}/>
    </div>
  </div>
     
    </>
  )
}
