import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from './Busca.module.css'
import NovoProduto from "../routes/NovoProduto";

function Busca(){
    const [busca, setBusca] = useState();
    const navigate = useNavigate();
    const Res = async (e) => {
        e.preventDefault();
            navigate(`/busca/${busca}`)      
    }
    return (
        <div className={styles.busca}>
            <form onSubmit={(e) => Res(e)}>
                <input type="text" className="" name="buscar" placeholder="Buscar..." onChange={(e) => setBusca(e.target.value)} 
                required/>
            </form>
        </div>
    );
}
export default Busca;