import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import style from "./NavBar.module.css";

export default function NavLinks() {
  return (
    <ul className={style.listaItens}>
      
    
      <li>
      <BsPersonCircle className={style.loginIcone} />
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/">Adicionar produto</Link>
      </li>
    </ul>
  );
}
