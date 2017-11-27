import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to="/" className="logo">
      <img src="logo-branco.png" alt="Logo do site WPG Tecnologia" />
    </Link>
);

export default Logo;
