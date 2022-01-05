import React,{ createContext, useState } from "react";

export const FrontSkillsContext=createContext()
export const FrontSkillsProvider =({children})=>{
    const [frontEndSkills, setFrontEndSkills] = useState([]);
    return (
        <FrontSkillsContext.Provider value={{frontEndSkills, setFrontEndSkills}}>
            {children}
        </FrontSkillsContext.Provider>
    )
}
export const BackSkillsContext=createContext()
export const BackSkillsProvider =({children})=>{
    const [backEndSkills, setBackEndSkills] = useState([]);
    return (
        <BackSkillsContext.Provider value={{backEndSkills, setBackEndSkills}}>
            {children}
        </BackSkillsContext.Provider>
    )
}



