import React from 'react';
import { Link } from 'react-router-dom';

const Presentation = () => {
    return (
        <div>
            Alors ! On veut remplir un formulaire ?
            <Link to="/form"><input type="button" value="Remplir le formulaire"/></Link>
        </div>
    );
};

export default Presentation;