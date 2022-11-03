import Dispdetails from "./DispDetails"
function Employees(props)
{
    const empdata = [
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/8198170/pexels-photo-8198170.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {ename: "Merin", pos: "Neurosurgeon", rate: 5, pic: "https://images.pexels.com/photos/3304341/pexels-photo-3304341.jpeg?auto=compress&cs=tinysrgb&w=600"}
    ]
    let result = empdata.map((item)=>
    {
        return <Dispdetails Docobj={item}/>
    })
    return (
        <div>
        {result}
        </div>
    )
}


export default Employees