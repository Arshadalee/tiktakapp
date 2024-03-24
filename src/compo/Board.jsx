
import { useState } from "react";
import Square from "./Square";


function Board(){

const [state,setState]=useState(Array(9).fill(null));

const [isXTurn,setIsXTurn] = useState(true);

const CheckWinner=()=>{
  const winnerLogic=[[0,1,2],
[3,4,5],[6,7,8],
[0,3,6],
[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let logic of winnerLogic){
  const [a,b,c]=logic;

  if(state[a]!==null &&state[a]===state[b] && state[a]===state[c])
  return state[a];
}
return false;

};

const isWinner=CheckWinner();

const handleClick=(index)=>{
 //console.log("clcked",index);
 const copyState=[...state];
 copyState[index]=isXTurn ? "X":"O";
 setState(copyState);
 setIsXTurn(!isXTurn);
}
function refreshPage() {
  window.location.reload(false);
}


    return<>
            <div className="board-container">
             {isWinner ? (<div className="finalPage"><center><h1 className="winner">and the winner is 🎉 {isWinner}🎊</h1>
             <button onClick={refreshPage} className="restart">Restart</button>
             <div className="footer">please checkout my linkedIn page  @Arshadali</div>
             </center> </div>):(<>
             <center><h1 className="GameName">tic tac toe</h1></center>
             
             <div className="Board-row">
              <Square onClick={()=>handleClick(0)}value={state[0]} />
                <Square onClick={()=>handleClick(1)} value={state[1]}/>
                <Square onClick={()=>handleClick(2)} value={state[2]}/>
                </div>  
                <div className="Board-row">
              <Square onClick={()=>handleClick(3)} value={state[3]}/>
                <Square onClick={()=>handleClick(4)} value={state[4]}/>
                <Square onClick={()=>handleClick(5)} value={state[5]}/></div>

                <div className="Board-row">
              <Square onClick={()=>handleClick(6)} value={state[6]}/>
                <Square onClick={()=>handleClick(7)} value={state[7]}/>
                <Square onClick={()=>handleClick(8)} value={state[8]}/></div>  
                
               
                </> )}

               
                </div> <center><button onClick={refreshPage} className="restart1">Restart</button></center>
        </>

    
}
export default Board;