import React from 'react'

export default ({obj}) =>{
    let result = (
        <div>Las especificaciones de este produto estan siendo actualizadas</div>
    )
    if(obj){
        const keys=Object.keys( obj)
        result=keys.map((field, index)=>(
            <>
            <div className='flex flex-row bg-gray-100 p-1 rounded-lg shadow-xl'>
            <div className='mr-2 font-bold'>{field+':'}</div>
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