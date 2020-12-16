import React from 'react'
function correct(text){
    const keys=Object.keys(text)
    let textConverted=keys.map((key)=>{
        const letter = text[key]
       
        if(letter=='_'){
            return(' ')
        }else if(letter==','){
           
        }else{
            return letter
        }
    })
   /*  let result= ["d",]
    for(let i=0; i<textConverted.length; i++){
        result.append(textConverted[i])
    }
 */
    return textConverted.join('')
}


export default ({obj}) =>{
    let result = (
        <div>Las especificaciones de este produto estan siendo actualizadas</div>
    )
    if(obj){
        const keys=Object.keys(obj)
        result=keys.map((field, index)=>(
            <>
            <div className='flex flex-row bg-gray-100 p-1 rounded-lg shadow-xl'>
            <div className='mr-1 font-bold max-w-min-content uppercase'><p className={''}>{correct(field)+':'}</p></div>
            <div>{obj[field]}</div>
            </div>
           
            <br/>
            </>
            ))
    }
   
   
    return (
        <div className={'flex flex-col bg-gray-400 rounded-lg font-medium p-4'}>
        
        {result}
        
        </div>
    
        )
}