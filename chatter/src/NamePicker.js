import "./NamePicker.css";
import { useState } from "react";
import { BsPencilSquare } from 'react-icons/bs';

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    function set() {
        props.setEditName(editName);
        setName("");
      }
    const [name, setName] = useState('')
 

return (
    {editName &&       
     <button className="name"
     onClick={props.editName}
            style={{left:10, right:'auto'}}>
            <BsPencilSquare style={{height:15, width:15}} />
        </button>}
      <input
        className="name-input"
        onChange={(e) => setName(e.target.value)}
      />
  );
}

  export default NamePicker;