//import App from "./App";
//let arraystud =[];
function Studetails()
{
    // let arraystud =  [
    //     {  sid : 10256, sname:"Scott", course: "React JS", age : 23  },
    //     {  sid : 10257, sname:"Smith", course: "Angular", age : 20  },
    //     {  sid : 10258, sname:"Sandy", course: "React JS", age : 30  },
    //     {  sid : 10259, sname:"Sam", course: "Angular", age : 40  },
    //     {  sid : 10252, sname:"Scooby", course: "React JS", age : 23  },
    //     {  sid : 10253, sname:"Smilten", course: "Angular", age : 20  },
    //     {  sid : 10254, sname:"Sandra", course: "React JS", age : 30  },
    //     {  sid : 10255, sname:"Samantha", course: "React JS", age : 40  }
    // ];
    // let result = arraystud.map((item,index)=>
    //     {
    //         return <tr key="index" style={{ backgroundColor : (index % 2 ==0)? "lightcoral":"lightsalmon" }} >
    //             <td>{item.sid}</td>
    //             <td>{item.sname}</td>
    //             <td>{item.course}</td>
    //             <td>{item.age}</td>
    //         </tr>
    //     });
        
    // return(
    //     <table border="2" width="50px">
    //         <tr>
    //             <th>Student ID</th>
    //             <th>Student Name</th>
    //             <th>Course</th>
    //             <th>Age</th>
    //         </tr>
    //         {result}
    //         <Students  course="Angular" />
    //         {/* <Students  course /> */}
    //     </table>

    // )
    return <Students course="Angular"></Students>
}

function Students(props)
{
    
    let arraystud =  [
        {  sid : 10256, sname:"Scott", course: "React JS", age : 23  },
        {  sid : 10257, sname:"Smith", course: "Angular", age : 20  },
        {  sid : 10258, sname:"Sandy", course: "React JS", age : 30  },
        {  sid : 10259, sname:"Sam", course: "Angular", age : 40  },
        {  sid : 10252, sname:"Scooby", course: "React JS", age : 23  },
        {  sid : 10253, sname:"Smilten", course: "Angular", age : 20  },
        {  sid : 10254, sname:"Sandra", course: "React JS", age : 30  },
        {  sid : 10255, sname:"Samantha", course: "React JS", age : 40  }
    ];
    
    if(props.course!=undefined){
        var filteredData = arraystud.filter(item=>item.course==props.course).map(item=>{
            return <tr>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
            </tr>
            //     </table>
        })

        return (<table border="2" width="50px">
                     <tr>
                         <th>Student ID</th>
                         <th>Student Name</th>
                         <th>Course</th>
                         <th>Age</th>
                     </tr>
                     {filteredData}
        </table>)
    }
    else{
        let arraystud =  [
        {  sid : 10256, sname:"Scott", course: "React JS", age : 23  },
        {  sid : 10257, sname:"Smith", course: "Angular", age : 20  },
        {  sid : 10258, sname:"Sandy", course: "React JS", age : 30  },
        {  sid : 10259, sname:"Sam", course: "Angular", age : 40  },
        {  sid : 10252, sname:"Scooby", course: "React JS", age : 23  },
        {  sid : 10253, sname:"Smilten", course: "Angular", age : 20  },
        {  sid : 10254, sname:"Sandra", course: "React JS", age : 30  },
        {  sid : 10255, sname:"Samantha", course: "React JS", age : 40  }
    ];
    let result = arraystud.map((item,index)=>
        {
            return <tr key="index" style={{ backgroundColor : (index % 2 ==0)? "lightcoral":"lightsalmon" }} >
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
            </tr>
        });
        
    return(
        <table border="2" width="50px">
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Age</th>
            </tr>
            {result}
            
        </table>

    )
    }
}
export default Studetails;