import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";
import style from "./Header.module.css";
import Busca from "./Busca"

export default function Navigation() {
  return (
    <>
      <nav className={style.navigation}>
        
        <div className={style.logo}>
          <Link to="/catalogo">
            <img
              className={style.logotipo}
              src={Logo}
              alt="logo"
            ></img>
          </Link>
          
        </div>
        
        <Busca />

        <ul className={style.listaItens}> 
            
            <li>
                <Link to="/novo">Adicionar produto</Link>
            </li>
            <li>
                <Link to="/">Sair</Link>
            </li>
        </ul>
      
      </nav>
    </>
  );
}