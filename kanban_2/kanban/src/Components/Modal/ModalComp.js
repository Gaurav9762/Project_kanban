import React from 'react'
import './ModalComp.css'
function ModalComp(props) {
  return (
    <div className='modal_main'
      onClick={()=>(props.onClose ? props.onClose(): "")}
    >
      <div className="modal_content custom-scroll" onClick={(e)=>e.stopPropagation()}>
        {props.children}
      </div>
      
    </div>
  )
}

export default ModalComp
