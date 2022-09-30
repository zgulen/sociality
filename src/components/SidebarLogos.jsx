import React from 'react'
import { useState} from 'react'
import logos from "../utills/logos.json"
const SidebarLogos = () => {
  const [target, setTarget] = useState("")
  const handleClick =(e, id)=>{
    setTarget(id)
  }
  
  return (
    <div className='sidebar'>
        <ul className='sidebar__list'>
          {
            logos?.map((items,i)=>{
              const { image, id } = items
              return(
                <li key={i} className={target !== id ? "" : "red-border"}>
                    <a href="#/" onClick={(e) => handleClick(e, id)}><img id={id} className={target !== id ? "sidebar__list--logo" : "opacity"} src={image} alt="222"/></a>
                </li>
              )
            })
          }
            

        </ul>
    </div>
  )
}

export default SidebarLogos