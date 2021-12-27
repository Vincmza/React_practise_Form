import React from 'react';

const DisplaySkills = ({frontEndSkills, backEndSkills}) => {

    return (
        <div>
            {frontEndSkills.length > 0 ?
            <>
                <ul className="front-skills-container">
                    {frontEndSkills.map((skill,index)=><li key={index}>{skill}</li>)}
                </ul>               
            </> 
            : 
            <>
            </>
            }
            {backEndSkills.length > 0 ?
            <>
                <ul className="back-skills-container">
                    {backEndSkills.map((skill,index)=><li key={index}>{skill}</li>)}
                </ul>               
            </> 
            : 
            <>
            </>
            }                        
        </div>
    );
};

export default DisplaySkills;