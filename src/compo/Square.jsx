

function Square(props){
   const Sborder={border: '1px solid'
,height:"100px",
width:"100%",
display:"flex",
justifyContent:"center",
alignItems:"center",
borderRadius:"5px"};

const boxstyle={
   borderRadius:"10px",
   fontSize:"30px",
}
;
    return (< >
        <div style={Sborder}onClick={props.onClick}>
        <div className="box" style={boxstyle}>{props.value} </div>
        </div>
            
        
         
         
     </>);
}
export default Square;