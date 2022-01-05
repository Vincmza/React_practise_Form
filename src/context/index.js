import React,{ createContext, useState } from "react";
//FRONTEND SKILLS
export const FrontSkillsContext=createContext()
export const FrontSkillsProvider =({children})=>{
    const [frontEndSkills, setFrontEndSkills] = useState([]);
    return (
        <FrontSkillsContext.Provider value={{frontEndSkills, setFrontEndSkills}}>
            {children}
        </FrontSkillsContext.Provider>
    )
}
//BACKEND SKILLS
export const BackSkillsContext=createContext()
export const BackSkillsProvider =({children})=>{
    const [backEndSkills, setBackEndSkills] = useState([]);
    return (
        <BackSkillsContext.Provider value={{backEndSkills, setBackEndSkills}}>
            {children}
        </BackSkillsContext.Provider>
    )
}
//USER INFOS
export const UserContext = createContext()
export const UserContextProvider = ({children})=>{
    const [userData, setUserData]=useState([]);
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}



