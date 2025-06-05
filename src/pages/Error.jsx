import React from 'react';

const Error = () => {
    return (
        <div className="error-container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            {/* Vous pouvez ajouter un lien vers la page d'accueil ici si nécessaire */}
            {/* <Link to="/">Retourner sur la page d’accueil</Link> */}
        </div>
    );
};

export default Error;
