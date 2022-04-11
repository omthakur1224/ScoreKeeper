import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [cric,setCric]=useState({
    score:76,
    wicket: 2,
    ball: 50,
  })
  const handleShot =(value)=>{
    if(cric.score>0 && cric.score<101){
      cric.score+=value;
      setCric({...cric});
    }
  }
  const handleBall =(value)=>{
    if( cric.score<101 && cric.ball>0 && cric.ball<300){
      cric.ball+=value;
      setCric({...cric});
    }
  }
  const handleWicket =(value)=>{
    if( cric.score<101 && cric.wicket>0 && cric.wicket<11){
      cric.wicket+=value;
      setCric({...cric});
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner" style={{
        display:"flex",
        justifyContent:"space-around",
      }}>
        <div>
          Score:
          <h1 className="scoreCount">
            {
              // show "score" here
              cric.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              cric.wicket
            }
          </h1>
        </div>

        <div>
          Over:{}
          <h1 className="overCount">
            {
              Math.floor(cric.ball/6)+ "."+((cric.ball)%6)
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>handleShot(1)} >Add 1</button>
        <button className="addScore4" onClick={()=>handleShot(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>handleShot(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleBall(1)}>Add 1</button>
      </div>
            {(cric.score>=101)?"India Won":""}
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;


