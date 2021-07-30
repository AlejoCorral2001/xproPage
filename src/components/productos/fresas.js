import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Fresa from './fresa'
import {useState} from 'react'
export default ()=>{
const data = useStaticQuery(graphql`
query{
  
  allContentfulFresas {
    nodes{
      name
      available
      price
      picture{
        fluid(quality:50){
                        
          ...GatsbyContentfulFluid
         }  
    
      }
      description {
        description
      }
    }
  }
      
}


`)


const [bigOne, setBigOne] = useState(0);
const enlarge = (index) => {
  setBigOne(index+1)
}
const fresas = data.allContentfulFresas.nodes
let result=0;

let cantidadesGenerator = []
for (let i=0; i<fresas.length; i++){
  cantidadesGenerator[i]=0
}
const [cantidadesEstado, setCantidadesEstado] = useState(cantidadesGenerator)
let cantidades = cantidadesEstado

const [totalActualizado, setTotalActualizado] = useState(0)
const [actualizar, setActualizar] = useState(0)

const add = (index) =>{
  let arr = cantidadesEstado
  arr[index] = arr[index]+1
  setCantidadesEstado(arr)
  setActualizar(!actualizar)
  let total=0
  for (let i=0; i<fresas.length; i++){
    if(cantidadesEstado[i]!=0){
      total = total + parseInt(fresas[i].price.substr(1, fresas[i].price.length)) * cantidadesEstado[i]
    }
  }
  setTotalActualizado(total)

}
const remove = (index) =>{
  let arr = cantidadesEstado
  arr[index] = arr[index]>0?arr[index]-1:0
  setCantidadesEstado(arr)
  setActualizar(!actualizar)
  let total=0
  for (let i=0; i<fresas.length; i++){
    if(cantidadesEstado[i]!=0){
      total = total + parseInt(fresas[i].price.substr(1, fresas[i].price.length)) * cantidadesEstado[i]
    }
  }
  setTotalActualizado(total)
  }

const comprar = () => {
  let msg = ""
  let total=0
  for (let i=0; i<fresas.length; i++){
    if(cantidadesEstado[i]!=0){
      msg=msg+("--"+cantidadesEstado[i]+"x "+fresas[i].name+"|  ")
      total = total + parseInt(fresas[i].price.substr(1, fresas[i].price.length)) * cantidadesEstado[i]
    }
    
  }
 msg=msg+"El precio total es de: $"+total
 msg="https://api.whatsapp.com/send/?phone=5493517889350&text="+msg
 window.open(msg ,"_top")

}
const vaciar = () =>{
  setCantidadesEstado(cantidadesGenerator)
  setTotalActualizado(0)

}
return(
  <>
    <div className="container mx-auto px-2 flex flex-wrap justify-center"> 
  {fresas.map((node, index)=>(
    <Fresa obj={node} size={bigOne==index+1?true:false} add={()=>add(index)} remove={()=>remove(index)} func={() => {enlarge(index)}} cantidad={cantidadesEstado[index]}/>
  ))}
    </div>
    <div className='sticky  flex justify-center bg-gray-400 rounded-lg mx-auto  mt-8 ' style={{width:"fit-content",bottom:"25px", display:totalActualizado>0?"":"none"}}>
    <p className='text-2xl md:text-3xl text-primary p-3'>{"Total: $"+totalActualizado}</p>
    <div className='flex justify-center bg-red-600 hover:bg-red-700 rounded-lg' onClick={vaciar}>
      <p className=' text-white  text-center text-sm my-auto px-2 md:px-4 md:text-xl font-sans font-semibold'>VACIAR</p></div>
    </div>
    
    <div className='flex justify-center bg-gray-400 rounded-lg mx-auto p-6 mt-12 hover:bg-gray-500 shadow-lg' style={{width:"fit-content"}} onClick={comprar}> <p className='text-3xl md:text-5xl text-primary'>COMPRAR</p></div>
    
    </>
    
)
}
    
