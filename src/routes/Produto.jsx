import blogFetch from "../model/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <div>
          <h2>{post.nome}</h2>
          <h3>{post.autor_a}</h3>
          <p>País: {post.pais}</p>
          <p>Lançamento: {post.lancamento}</p>
          <p>Editora: {post.editora}</p>
          <p>Gênero: {post.genero}</p>
          <p> Total de páginas: {post.total_de_paginas}</p>
          <h4>{post.valor}</h4>
        </div>
      )}
    </div>
  );
};

export default Produto;