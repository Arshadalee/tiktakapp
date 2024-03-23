

function Square(props){
   const Sborder={border: '1px solid'
,height:"110px",
width:"100%",
display:"flex",
justifyContent:"center",
alignItems:"center"};

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