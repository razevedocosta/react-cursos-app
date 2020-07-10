import React from 'react';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <a href="/" class="brand-logo">Meus Cursos</a>
                <ul class="right">
                    <li><a href="/curso">Curso</a></li>
                    <li><a href="/categoria">Categoria</a></li>
                    <li><a href="/cargaHoraria">Carga Horária</a></li>
                </ul>
            </div>
      </nav>
    );
}

export default Header;