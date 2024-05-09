import React, { useEffect, useRef } from 'react'

function Dropdown(props) {

    const dropdownref = useRef()

    const handleClick= (event)=>{
        if(dropdownref && !dropdownref?.current?.contains(event?.target))
        {
            if(props.onClose)
            {
                props.onClose()
            }
        }
       
    }
    useEffect(()=>{
        document.addEventListener("click",handleClick)

        return ()=>{
            document.removeEventListener("click",handleClick)

        }
    })

  return (
    <div ref={dropdownref} className='dropdown' 
    style={{position:'absolute',
            top:"100%",
            right:"0",
    }}>
      {props.children}
    </div>
  )
}

export default Dropdown

