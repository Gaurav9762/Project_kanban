
import React, { useState } from "react";
import {   X } from "react-feather";
function TextAreaComp(props) {
    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState("")
    console.log("text Area Componenets")
  return (
    <div className="editable">
      {showEdit ? 
        <form
          className="editable_edit"
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) {
              props.onSubmit(inputValue);
            }
            setShowEdit(false)
            setInputValue("")
          }}
        >
          <textarea
            rows={10} 
            cols={35}
            // disabled={true}    
            autoFocus
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            type="text"
            placeholder={props.placeholder || "Enter your text here"}
          />
          
          
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X className="cross" onClick={()=>setShowEdit(false)}></X>         
          </div>      
        </form>
       : <p className="editable_display" onClick={()=>setShowEdit(true)}>{props.text || "Add Item"}</p>
      }
    </div>
  )
}

export default TextAreaComp

