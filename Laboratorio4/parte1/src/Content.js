import React from 'react'
import Static from './Static.js'
const Content = (props) => {
const {good , neutral , bad } = props
    return (
        
        <div>
           {good || neutral || bad  ?
           <div>
           <Static text ="good" value = {good}/>    
           <Static text ="neutral" value = {neutral}/> 
           <Static text ="bad" value = {bad}/> 
           <Static text ="all" value = {props.all}/> 
           <Static text ="average" value = {props.average}/> 
           <Static text ="positive" value = {props.positive}/></div>
           : 
           <p>Bienvenido<br></br>
           </p>
           }  
        
        </div>
    )
}
export default Content