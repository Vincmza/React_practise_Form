import React,{ useContext} from 'react';
import {UserContext, FrontSkillsContext, BackSkillsContext}from "../context/index"

const Confirmation = () => {
    const {userData}=useContext(UserContext)
    const {frontEndSkills}=useContext(FrontSkillsContext)
    console.log(frontEndSkills);
    return (
        <div>
            <div>
                <h1>Résumons ensemble vos informations</h1>
            </div>
            <div>
                <h2>Commençons par votre identité</h2>
                <div>
                    <p>Vous êtes : {userData.nom} {userData.prenom}</p>
                    <p>Votre date de naissance est le : {userData.birthday}</p>
                    <p>L'email que vous utilisez est : {userData.email}</p>
                    {userData.phone && <p>Vous êtes joignable au : {userData.phone}</p>}
                    {userData.lien && <p>Votre compte github : {userData.lien}</p>}
                </div>
            </div>
            <div>
                <h2>Continuons avec vos compétences</h2>
                <div>
                    <h3>En ce qui concerne la partie frontend</h3>
                    <ul>
                        {frontEndSkills
                        .filter(skill=>skill.level === "Débutant")
                        .map(item=>
                        <li key={item} value={item.id}>{item.id}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Confirmation;