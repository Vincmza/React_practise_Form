import React from "react";
import { SkillInput } from "./Inputs";

const SkillsInfosForm = () => {
    return (
        <div>
            <div className="frontend-skills-container">
                <p>Compétences Frontend</p>
                <SkillInput name="html" value="HTML5">HTML5</SkillInput>
                <SkillInput name="css" value="CSS3">CSS3</SkillInput>
                <SkillInput name="javascript" value="Javascript">Javascript</SkillInput>
                <SkillInput name="react" value="React">React.js</SkillInput>
                <SkillInput name="vue" value="Vue">Vue.js</SkillInput>
                <SkillInput name="angular" value="Angular">Angular</SkillInput>
                <SkillInput name="ember" value="Ember">Ember</SkillInput>
            </div>
            <div className="backend-skills-container">
                <p>Compétences Backend</p>
                <SkillInput name="php" value="PHP">PHP</SkillInput>
                <SkillInput name="ruby" value="Ruby">Ruby</SkillInput>
                <SkillInput name="symphony" value="Symphony">Symphony</SkillInput>
                <SkillInput name="node" value="Node">Node.js</SkillInput>
                <SkillInput name="python" value="Python">Python</SkillInput>
                <SkillInput name="sql" value="SQL">SQL</SkillInput>
                <SkillInput name="sequelize" value="Sequelize">Sequelize</SkillInput>
                <SkillInput name="postgresql" value="PostgreSQL">PostgreSQL</SkillInput>
            </div>
            
        </div>
    );
};

export default SkillsInfosForm;