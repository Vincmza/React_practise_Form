import React from "react";
import { SkillInput } from "./Inputs";

const SkillsInfosForm = ({
	frontEndSkills,
	setFrontEndSkills,
	backEndSkills,
	setBackEndSkills,
}) => {
	const availableFrontSkills = [
		{ id: "HTML5", label: "HTML5", type: "frontend" },
		{ id: "CSS3", label: "CSS3", type: "frontend" },
		{ id: "Javascript", label: "Javascript", type: "frontend" },
		{ id: "React.js", label: "React.js", type: "frontend" },
		{ id: "Vue.js", label: "Vue.js", type: "frontend" },
		{ id: "Angular", label: "Angular", type: "frontend" },
		{ id: "Ember", label: "Ember", type: "frontend" },
	];
	const availableBackSkills = [
		{ id: "PHP", label: "PHP", type: "backend" },
		{ id: "Ruby", label: "Ruby", type: "backend" },
		{ id: "Symphony", label: "Symphony", type: "backend" },
		{ id: "Node.js", label: "Node.js", type: "backend" },
		{ id: "Python", label: "Python", type: "backend" },
		{ id: "SQL", label: "SQL", type: "backend" },
		{ id: "Sequelize", label: "Sequelize", type: "backend" },
		{ id: "PostgreSQL", label: "PostegreSQL", type: "backend" },
	];
	//STORING FRONT END SKILLS
	const handleCheckFront = (e) => {
		if (e.target.checked === true) {
			if (frontEndSkills.includes(e.target.value) === false) {
				setFrontEndSkills((previousValue) => [...previousValue, e.target.value]);
			}
		} else {
			const array = [...frontEndSkills];
			const index = array.indexOf(e.target.value);
			array.splice(index, 1);
			setFrontEndSkills(array);
		}
	};
	//STORING BACKEND SKILLS
	const handleCheckBack = (e) => {
		if (e.target.checked === true) {
			if (backEndSkills.includes(e.target.value)=== false) {
				setBackEndSkills((previousValue) => [...previousValue, e.target.value]);
			}
		} else {
			const array = [...backEndSkills];
			const index = array.indexOf(e.target.value);
			array.splice(index, 1);
			setBackEndSkills(array);
		}
	};
	return (
		<div>
			<div className="frontend-skills-container">
				<p>Compétences Frontend</p>
				{availableFrontSkills.map((skill) => (
					<SkillInput
						key={skill.id}
						name={skill.type}
						value={skill.id}
						onChange={handleCheckFront}
						checked={frontEndSkills.includes(skill.id)}
					>
						{skill.label}
					</SkillInput>
				))}
			</div>
			<div className="backend-skills-container">
				<p>Compétences Backend</p>
				{availableBackSkills.map((skill) => (
					<SkillInput
						key={skill.id}
						name={skill.type}
						value={skill.id}
						onChange={handleCheckBack}
						checked={backEndSkills.includes(skill.id)}
					>
						{skill.label}
					</SkillInput>
				))}
			</div>
		</div>
	);
};

export default SkillsInfosForm;
