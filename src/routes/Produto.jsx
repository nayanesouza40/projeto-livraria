import blogFetch from "../model/axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import styles from './Produto.module.css'
import {Link} from "react-router-dom"

const Produto = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/Livro/${id}`);
      const data = response.data;
      setPost(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {!post.nome ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.livro}>
          <img src={`../../public/${post.capa}`} alt={post.nome} className={styles.img}/>
          <h2 className={styles.nome}>{post.nome}</h2>
          <h3 className={styles.autor}>{post.autor_a}</h3>
          <hr />
          <p>País: {post.pais}</p>
          <p>Lançamento: {post.lancamento}</p>
          <p>Editora: {post.editora}</p>
          <p>Gênero: {post.genero}</p>
          <p> Total de páginas: {post.total_de_paginas}</p>
          <hr />
          <h4>{post.valor}</h4>
          <Link to={`/produto/editar/${post.id}`}>  
            <button className={styles.editar}>Editar</button>
          </Link>  
         
          <Link to={`/`}>  
          <input type="submit" className={styles.adicionar} value="Excluir"/>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Produto;