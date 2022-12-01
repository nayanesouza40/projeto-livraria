import blogFetch from "../scripts/axios";

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
          <p>{post.genero}</p>
        </div>
      )}
    </div>
  );
};

export default Produto;