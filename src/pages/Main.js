import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import style from "./Main.module.css";

export default function Main() {
  return (
    <>
        <NavBar />
        <div className={style.main}>
          
        </div>
        <Footer />
    </>
  );
}
