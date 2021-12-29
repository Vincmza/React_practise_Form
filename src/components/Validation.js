import React, { useState } from 'react';

const Validation = ({user, front, back}) => {
    const [isClicked, setIsClicked]=useState(false)
    const taRace = ()=>{
		setIsClicked(pv=>!pv)
	}
    return (
        <div>
            <input type="submit" value={"Valider"} onClick={taRace}/>
            {isClicked && (<><div>Salut les amis !!</div></>)}	
        </div>
    );
};

export default Validation;