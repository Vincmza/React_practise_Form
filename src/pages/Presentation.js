import React from 'react';
import { useNavigate } from 'react-router-dom';
import styledComponents from 'styled-components';

const Presentation = () => {
    let navigate = useNavigate()
    const handleNav = ()=>{
        navigate("/form")
    }
    return (
        <div>
            Alors ! On veut remplir un formulaire ?
            <input type="button" value="Remplir le formulaire" onClick={handleNav}/>
        </div>
    );
};

export default Presentation;