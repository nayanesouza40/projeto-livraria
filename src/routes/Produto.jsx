import blogFetch from "../model/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Produto.module.css'
import livro1 from '../../public/O-Jardim-Secreto.jpg'
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
          <img src={livro1} alt="" className={styles.img}/>
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
          <Link to={`/excluir/${post.id}`}>  
            <button className={styles.adicionar}>Excluir</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Produto;