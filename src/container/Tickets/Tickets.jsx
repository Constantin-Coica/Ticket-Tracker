import "./Tickets.scss";
import Ticket from "../../components/Ticket/Ticket";
import {useState} from "react";

const Tickets = (props) => {
    const{data} = props
    
    const [searchTerm, setSearchTerm] = useState("");
    const handleInput = (event) =>{
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }

    const [selectTerm, setSelecTerm] = useState("");
    const handleSelect = (event) =>{
      setSelecTerm(event.target.value)
    }

    const filtered = data.filter(employee =>{
      return  employee.role.includes(selectTerm) && employee.name.toLowerCase().includes(searchTerm);
  })

    const uniqueRoles = new Set(data.map(employee=>{
      return employee.role;
    }))
    const roles = Array.from(uniqueRoles);
    

  return (<>
  <select defaultValue={"Employee Category"} placeholder="Category" onChange={handleSelect} className="select">
    <option value="">All</option>
    {roles.map(function (element, index){
      return <option value={element} key={index}>{element}</option>
    })
    }
  </select>
  <input type="text" placeholder="Search employee..." className="input" onChange={handleInput} />
    <div className="tickets-container">
    {filtered.map(element =>{
        return <Ticket name={element.name} role={element.role} key={element.id}/>
    })}
  </div>
  </>)

};

export default Tickets