import React, { useContext } from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";

const level = ["Débutant", "Intermédiaire", "Confirmé", "Expert"];
const DisplaySkills = () => {
	const { frontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills } = useContext(BackSkillsContext);
	return (
		<div>
			{frontEndSkills.length > 0 ? (
				<>
					<p>Les technologies frontend que je connais :</p>
					<ul className="front-skills-container">
						{frontEndSkills.map((skill, index) => (
							<li key={index} value={skill}>{skill.id}</li>
						))}
                        
					</ul>
				</>
			) : (
				<></>
			)}
			{backEndSkills.length > 0 ? (
				<>
					<p>Les technologies backend que je connais :</p>
					<ul className="back-skills-container">
						{backEndSkills.map((skill, index) => (
							<li key={index}>{skill.id}</li>
						))}
					</ul>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default DisplaySkills;
