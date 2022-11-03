//import Employees from "./Employees";

function Dispdetails(props){
   

    return (<div style={{ border: "2px solid black", float:"left", margin:"10px", padding:"30px", textAlign:"center" }}>
      <img src={props.Docobj.pic} height="200px" width="200px" style={{ "border-radius":"100%" }}/><br/><br/>
      <span>{props.Docobj.ename}</span><br/><br/>
      <span>{props.Docobj.pos}</span><br/><br/>
      <span>{Rating(props.Docobj.rate)}</span><br/><br/>
      <input type="button" value="Book Appointment"/>
    </div>)
}

function Rating(rate1)
{
    let arr1=[];
    for(let i =0;i<=rate1;i++){
        arr1.push(<img src="green_star.png" height="10px"/>)
    }
    return arr1;
}
export default Dispdetails;