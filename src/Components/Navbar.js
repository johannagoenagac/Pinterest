import React from 'react';
import './Navbar.css';


function Navbar() {


    return (
        <div className="container">
            <navbar className="fixed-navbar">
                <ul className="listNavbar">
                    <li><img className="logotype" src="../pinterest.png" alt="logo"/></li>
                    <li><input className="search" type="search" placeholder="Buscar" /></li>
                    <li>Inicio</li>
                    <li>Siguiendo</li>
                    <li><img className="logoPerfil" src="../Group (1).png" alt="logoPerfil"/>Johanna</li>
                    <li><i class="fas fa-comment-dots"></i></li>
                    <li><i class="fas fa-bell"></i></li>
                </ul>
            </navbar>
        </div>
    )

}

export default Navbar;