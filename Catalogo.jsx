import blogFetch from "../scripts/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Catalogo.module.css'
import livro1 from '../img/O-Jardim-Secreto.jpg'

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
      <h1 className={styles.tituloH1}>Todos os livros</h1>
      <div className={styles.catalogo}>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className={styles.item} key={post.id}>
            <Link to={`/produto/${post.id}`}>
              <img src={livro1} alt="" className={styles.imgItem}/>
              <h2 className={styles.tituloH2}>{post.nome}</h2>
            </Link>
              <p className={styles.autor}>{post.autor_a}</p>
              <p className={styles.valor}>{post.valor}</p>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Catalogo;