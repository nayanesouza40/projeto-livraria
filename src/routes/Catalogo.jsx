import blogFetch from "../model/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Catalogo.module.css"
import Busca from "../components/Busca";

const Catalogo = () => {

  
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/Livro");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>

      
      <div className={styles.catalogo}>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (

        posts.map((post) => (
          
          
          <div className={styles.item} key={post.id}>
            <Link to={`/produto/${post.id}`}>
              <img src={`../../public/${post.capa}`} alt={post.nome} className={styles.imgItem}/>
              <h2 className={styles.tituloH2}>{post.nome}</h2>
            </Link>
              <p className={styles.autor}>{post.autor_a}</p>
              <p className={styles.valor}>{post.valor}</p>
            <Link to={`/produto/editar/${post.id}`}>  
              <button className={styles.editar}>Editar</button>
            </Link>
          </div>

        ))
      )}
      </div>
    </div>
  );
};

export default Catalogo;