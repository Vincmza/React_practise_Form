import React from "react";
import { SkillInput } from "./Inputs";

const SkillsInfosForm = ({ frontEndSkills, setFrontEndSkills, backEndSkills, setBackEndSkills }) => {
    
	const handleSubmit = (e) => {
		e.preventDefault();       
	};
	return (
		<div>
			<div className="frontend-skills-container">
				<p>Compétences Frontend</p>

				<SkillInput
					name="html"
					value={frontEndSkills.Name}
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, Name: "HTML5", Check: e.target.checked }))}
				>
					HTML5
				</SkillInput>

				<SkillInput 
                    name="css"
                    value={frontEndSkills.Name}
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, Name : "CSS3", Check : e.target.checked }))}
                >
					CSS3
				</SkillInput>
				<SkillInput 
                    name="javascript" 
                    value={frontEndSkills.Name}
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, Name : "JavaScript", Check : e.target.checked }))}
                >
					Javascript
				</SkillInput>
				<SkillInput 
                    name="react" 
                    value={frontEndSkills.React}
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, React: e.target.checked }))}
                >
					React.js
				</SkillInput>
				<SkillInput 
                    name="vue" 
                    value={frontEndSkills.Vue}
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, Vue: e.target.checked }))}
                >
					Vue.js
				</SkillInput>
				<SkillInput 
                    name="angular" 
                    value={frontEndSkills.Angular}
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, Angular: e.target.checked }))}
                >
					Angular
				</SkillInput>
				<SkillInput 
                    name="ember" 
                    value="Ember"
                    onClick={(e) => setFrontEndSkills(previousValue=>({...previousValue, Ember: e.target.checked }))}
                >
					Ember
				</SkillInput>
			</div>
			<div className="backend-skills-container">
				<p>Compétences Backend</p>
				<SkillInput 
                    name="php" 
                    value={backEndSkills.PHP}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, PHP: e.target.checked }))}
                >
					PHP
				</SkillInput>
				<SkillInput 
                    name="ruby" 
                    value={backEndSkills.Ruby}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, Ruby: e.target.checked }))}
                >
					Ruby
				</SkillInput>
				<SkillInput 
                    name="symphony"
                    value={backEndSkills.Symphony}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, Symphony: e.target.checked }))}
                >
					Symphony
				</SkillInput>
				<SkillInput 
                    name="node" 
                    value={backEndSkills.Node}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, Node: e.target.checked }))}
                >
					Node.js
				</SkillInput>
				<SkillInput 
                    name="python" 
                    value={backEndSkills.Python}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, Python: e.target.checked }))}
                >
					Python
				</SkillInput>
				<SkillInput 
                    name="sql" 
                    value={backEndSkills.SQL}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, SQL: e.target.checked }))}
                >
					SQL
				</SkillInput>
				<SkillInput 
                    name="sequelize" 
                    value={backEndSkills.Sequelize}
                    onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, Sequelize: e.target.checked }))}
                >
					Sequelize
				</SkillInput>
				<SkillInput 
                name="postgresql" 
                value={backEndSkills.PostgreSQL}
                onClick={(e) => setBackEndSkills(previousValue=>({...previousValue, PostgreSQL: e.target.checked }))}
                >
					PostgreSQL
				</SkillInput>
			</div>
			<button type="submit" onClick={handleSubmit}>
				Valider mes compétences
			</button>
		</div>
	);
};

export default SkillsInfosForm;
