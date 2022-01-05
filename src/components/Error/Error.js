import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            Erreur !
            <Link to="/"><input type="button" value="Retour"/></Link>
        </div>
    );
};

export default Error;