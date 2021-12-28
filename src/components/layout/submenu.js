import React from 'react'
import {Link} from 'gatsby'
import {useState} from 'react'
import { Collapse } from 'react-collapse';

export default (props)=>{
    let inPage = false  //esta variable tiene la informacion si me encuentro en la pagina que estoy idexando
    props.links.map((link)=>{
        if (link[1]==props.props.type){
            inPage = inPage || true
        }
    })
    const [isOpened, setIsOpened] = useState(props.defaultOpened?inPage:false)
        const switchState = (state) =>{ //con esta funcion cierro y abro el submenu de catalogo
            setIsOpened(state)
          }
    const result = 
    props.links.map((links,index) => {
        return(
            <Link to={('/'+links[1])} className={((props.props.type==links[1])?'font-bold':'')}>{links[0]}</Link>
        )
    }) 

return(
<div  className={(isOpened==true)?"px-4 mx-1 bg-gray-300 rounded-lg":"px-4"} >
       <div>
            <p  onClick={()=>switchState(!isOpened)} className={((inPage)?'font-bold text-primary':'text-primary')}>{props.name}</p>
       </div>
       <Collapse isOpened={isOpened} theme={{collapse: "rapid-collapse"}}>
            <div className={'flex flex-col items-center text-primary-lighter'}>
                {result}
            </div>
        </Collapse>
</div>
)
}
    
