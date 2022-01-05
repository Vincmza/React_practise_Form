import React, {useContext} from 'react';
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";

const DisplaySkills = () => {
    const {frontEndSkills}=useContext(FrontSkillsContext)
	const {backEndSkills}=useContext(BackSkillsContext)

    return (
        <div>
            {frontEndSkills.length > 0 ?
            <>
                <p>Les technologies frontend que je connais :</p>
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
                <p>Les technologies backend que je connais :</p>
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