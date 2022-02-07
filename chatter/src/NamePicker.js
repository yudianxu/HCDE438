import "./NamePicker.css";
import { useState } from "react";
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineCheckSquare } from 'react-icons/ai';

function NamePicker(props) {
  const [editName, setEditName] = useState(false);
  function set() {
    props.setEditName(editName);
    setName("");
  }
  const [name, setName] = useState('')


  return (<>
    {editName ? <div
      style={{ flex: 1,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
      <input
        className="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <AiOutlineCheckSquare onClick={() => {
          setEditName(false);
        }} style={{ height: 30, width: 30, color: "#fff",marginLeft: "5px"}} />
      
    </div> :
      (<div style={{ flex: 1,display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
        <span style={{ color: "#fff" }}>
          {name ? name : "Set Username"}
        </span>
        <BsPencilSquare style={{ height: 15, width: 15, color: "#fff", cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            setEditName(true);
          }} /></div>)
    }
  </>
  );
}

export default NamePicker;