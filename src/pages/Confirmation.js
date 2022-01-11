import React, { useContext } from "react";
import { UserContext, FrontSkillsContext, BackSkillsContext } from "../context/index";

const Confirmation = () => {
	const { userData } = useContext(UserContext);
	const { frontEndSkills } = useContext(FrontSkillsContext);
    const { backEndSkills } = useContext(BackSkillsContext);
	
    //Display the skills according the level choosen
	const skillsToDisplay = (type, level) => {
        if(type === "front"){
            return (
                <>
                    <ul>
                        {frontEndSkills
                            .filter((skill) => skill.level === level)
                            .map((item) => (
                                <li key={item.id} value={item.id}>
                                    {item.id}
                                </li>
                            ))}
                    </ul>
                </>
            );
        } else if(type === "back"){
            return (
                <>
                    <ul>
                        {backEndSkills
                            .filter((skill) => skill.level === level)
                            .map((item) => (
                                <li key={item.id} value={item.id}>
                                    {item.id}
                                </li>
                            ))}
                    </ul>
                </>
            );
        }
		
	};
    //Check the level choosen previously
	const checkLevel = (type, level) => {
        if(type === "front"){
            return (
                <>
                    {frontEndSkills.some((item) => item.level === level) && (
                        <div>
                            <p>Il semble que vous soyez {level} en :</p>
                            {skillsToDisplay(type,level)}
                        </div>
                    )}
                </>
            );
        }else if (type === "back"){
            return (
                <>
                    {backEndSkills.some((item) => item.level === level) && (
                        <div>
                            <p>Il semble que vous soyez {level} en :</p>
                            {skillsToDisplay(type,level)}
                        </div>
                    )}
                </>
            );
        }
		
	};
	return (
		<div>
			<div>
				<h1>Résumons ensemble vos informations</h1>
			</div>
			<div>
				<h2>Commençons par votre identité</h2>
				<div>
					<p>
						Vous êtes : {userData.nom} {userData.prenom}
					</p>
					<p>
                        Votre date de naissance est le : {userData.birthday}
                    </p>
					<p>
                        L'email que vous utilisez est : {userData.email}
                    </p>
					{userData.phone && 
                        <p>
                            Vous êtes joignable au : {userData.phone}
                        </p>
                    }
					{userData.lien && 
                        <p>
                            Votre compte github : {userData.lien}
                        </p>
                    }
				</div>
			</div>
			<div>
				<h2>Continuons avec vos compétences</h2>
				<div>
					<h3>En ce qui concerne la partie frontend</h3>
                    {checkLevel("front","Débutant")}
                    {checkLevel("front","Intermédiaire")}
                    {checkLevel("front","Confirmé")}
                    {checkLevel("front","Expert")}
				</div>
                <div>
					<h3>En ce qui concerne la partie backend</h3>
                    {checkLevel("back","Débutant")}
                    {checkLevel("back","Intermédiaire")}
                    {checkLevel("back","Confirmé")}
                    {checkLevel("back","Expert")}
				</div>
			</div>
		</div>
	);
};

export default Confirmation;
