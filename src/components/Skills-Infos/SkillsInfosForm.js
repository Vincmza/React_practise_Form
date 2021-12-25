import React from "react";
import { SkillInput } from "./Inputs";

const SkillsInfosForm = ({frontEndSkills, setFrontEndSkills, backEndSkills, setBackEndSkills}) => {
	//STORING FRONT END SKILLS
	const handleCheckFront = (e)=>{
		if(e.target.checked === true){
			setFrontEndSkills(previousValue=>([...previousValue, e.target.value]))
		}
		else {
			const array = [...frontEndSkills]
			const index = array.indexOf(e.target.value)
			array.splice(index,1)
			setFrontEndSkills(array)		
		}
	}
	//STORING BACKEND SKILLS
	const handleCheckBack = (e)=>{
		if(e.target.checked === true){
			setBackEndSkills(previousValue=>([...previousValue, e.target.value]))
		}
		else {
			const array = [...backEndSkills]
			const index = array.indexOf(e.target.value)
			array.splice(index,1)
			setBackEndSkills(array)		
		}
	}
	return (
		<div>
			<div className="frontend-skills-container">
				<p>Compétences Frontend</p>

				<SkillInput
					name="html"
					value="HTML"
                    onChange={handleCheckFront}
				>
					HTML5
				</SkillInput>

				<SkillInput 
                    name="css"
                    value="CSS3"
                    onChange={handleCheckFront}
                >
					CSS3
				</SkillInput>
				<SkillInput 
                    name="javascript" 
                    value="Javascript"
                    onChange={handleCheckFront}
                >
					Javascript
				</SkillInput>
				<SkillInput 
                    name="react" 
                    value="React"
                    onChange={handleCheckFront}
                >
					React.js
				</SkillInput>
				<SkillInput 
                    name="vue" 
                    value="Vue"
                    onChange={handleCheckFront}
                >
					Vue.js
				</SkillInput>
				<SkillInput 
                    name="angular" 
                    value="Angular"
                    onChange={handleCheckFront}
                >
					Angular
				</SkillInput>
				<SkillInput 
                    name="ember" 
                    value="Ember"
                    onChange={handleCheckFront}
                >
					Ember
				</SkillInput>
			</div>
			<div className="backend-skills-container">
				<p>Compétences Backend</p>
				<SkillInput 
                    name="php" 
                    value="PHP"
                    onChange={handleCheckBack}
                >
					PHP
				</SkillInput>
				<SkillInput 
                    name="ruby" 
                    value="Ruby"
                    onChange={handleCheckBack}
                >
					Ruby
				</SkillInput>
				<SkillInput 
                    name="symphony"
                    value="Symphony"
                    onChange={handleCheckBack}
                >
					Symphony
				</SkillInput>
				<SkillInput 
                    name="node" 
                    value="Node"
                    onChange={handleCheckBack}
                >
					Node.js
				</SkillInput>
				<SkillInput 
                    name="python" 
                    value="Python"
                    onChange={handleCheckBack}
                >
					Python
				</SkillInput>
				<SkillInput 
                    name="sql" 
                    value="SQL"
                    onChange={handleCheckBack}
                >
					SQL
				</SkillInput>
				<SkillInput 
                    name="sequelize" 
                    value="Sequelize"
                    onChange={handleCheckBack}
                >
					Sequelize
				</SkillInput>
				<SkillInput 
                name="postgresql" 
                value="PostegreSQL"
                onChange={handleCheckBack}
                >
					PostgreSQL
				</SkillInput>
			</div>
		</div>
	);
};

export default SkillsInfosForm;
