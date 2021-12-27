import React, { useState } from 'react';


const DisplayUser = ({userData}) => {
    //GETTING AN ARRAY OF DATA INSTEAD OF AN OBJECT
    const user = []
    const objectToArray = ()=>{
        for (const [key, value] of Object.entries(userData)) {
            if( value === ""){
                user.push(`${key}: champ non renseigné`)
            } else {
                user.push(`${key}: ${value}`);
            }           
        }
    }
    //CALLING FUNCTION TO GATHER USER INFOS IN AN ARRAY
    objectToArray()
    const [isValid, setIsValid]=useState(false)
    const handleClick = (e)=>{
        e.preventDefault()       
        if(isValid === false){
            setIsValid(true)            
        } else {
            setIsValid(false)
        }           
    }
    return (
        <div>
            <button type="button" onClick={handleClick}>Valider</button>
            {isValid && 
                <ul>
                    {user.map((user, index)=><li key={index} value={user}>{user}</li>)}
                </ul>
            }
        </div>
    );
};

export default DisplayUser;