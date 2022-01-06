import React, { useContext } from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";

const DisplaySkills = () => {
	const { frontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills } = useContext(BackSkillsContext);
	return (
		<div>
			{frontEndSkills.length > 0 ? (
				<>
					<p>Les technologies frontend que je connais :</p>
					<ul className="front-skills-container">
						{frontEndSkills.map((skill) => (
							<li key={skill.id} value={skill}>{skill.id}{skill.level === "" ? (<></>):(<> : {skill.level}</>)}</li>
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
						{backEndSkills.map((skill) => (
							<li key={skill.id}>{skill.id}{skill.level === "" ? (<></>):(<> : {skill.level}</>)}</li>
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
