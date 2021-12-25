import React from 'react';

const SkillsValidButton = ({frontEndSkills,backEndSkills}) => {

    const handleClick = (e)=>{
    }
    return (
        <div>
            {frontEndSkills.length > 0 || backEndSkills.length > 0 ? 
            <>
                <button type="submit" onClick={handleClick}>Confirmer mes compétences</button>
            </> 
            : 
            <>
            </>
            }
                        
        </div>
    );
};

export default SkillsValidButton;