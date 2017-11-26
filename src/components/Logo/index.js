import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to="/" className="logo">
      <img src="logo-branco.png" />
    </Link>
);

export default Logo;