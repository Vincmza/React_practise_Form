import React, { useState, useContext } from "react";
import { SkillInput } from "./Inputs";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";


const SkillsInfosForm = () => {
	const {frontEndSkills, setFrontEndSkills}=useContext(FrontSkillsContext)
	const {backEndSkills, setBackEndSkills}=useContext(BackSkillsContext)
	
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
	//STATE ALLOWS TO EITHER DISPLAY OR HIDE SKILLS
	const [displayListFront, setDisplayListFront]=useState(false);
	const [displayListBack, setDisplayListBack]=useState(false);
	//FUNCTION TO DISPLAY OR HIDE FRONT SKILLS
	const handleListFront = ()=>{
		setDisplayListFront((pv)=>!pv)
	}
	//FUNCTION TO DISPLAY OR HIDE BACK SKILLS
	const handleListBack = ()=>{
		setDisplayListBack((pv)=>!pv)
	}
	//STORING FRONT END SKILLS
	const handleCheckFront = (e) => {
		if (e.target.checked === true) {
			if (frontEndSkills.some(elem =>elem.id === e.target.value) === false) {
				setFrontEndSkills((previousValue) => [...previousValue, {id : e.target.value, level: ""}]);
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
			if (backEndSkills.some(elem =>elem.id === e.target.value)=== false) {
				setBackEndSkills((previousValue) => [...previousValue, {id : e.target.value, level: ""}]);
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
			{displayListFront === false ? (<>
				<h1>Compétences frontend</h1>
				<input type="button" value="Afficher" onClick={handleListFront}/>
			</>):(
			<>
				<h1>Compétences frontend</h1>
				<input type="button" value="Masquer" onClick={handleListFront}/>
				<div className="frontend-skills-container">
				{availableFrontSkills.map((skill) => (
					<SkillInput
						key={skill.id}
						name={skill.id}
						value={skill.id}
						skillType={skill.type}
						onChange={handleCheckFront}
						checked={frontEndSkills.some((elem)=> elem.id === skill.id)}
					>
						{skill.label}
					</SkillInput>
				))}
			</div>
			</>)}
			
			{displayListBack === false ? (<>
				<h1>Compétences backend</h1>
				<input type="button" value="Afficher" onClick={handleListBack}/>
			</>):(
			<>
				<h1>Compétences backend</h1>
				<input type="button" value="Masquer" onClick={handleListBack}/>
				<div className="backend-skills-container">
				{availableBackSkills.map((skill) => (
					<SkillInput
						key={skill.id}
						name={skill.id}
						value={skill.id}
						skillType={skill.type}
						onChange={handleCheckBack}
						checked={backEndSkills.some((elem)=> elem.id === skill.id)}
					>
						{skill.label}
					</SkillInput>
				))}
			</div>
			</>)}
		</div>
	);
};

export default SkillsInfosForm;
