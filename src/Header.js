import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" className="brand-logo">Meus Cursos</LinkWrapper>
                <ul class="right">
                    <li><LinkWrapper to="/categorias">Categorias</LinkWrapper></li>
                    <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                </ul>
            </div>
      </nav>
    );
}

export default Header;