import blogFetch from "../scripts/axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";


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
      <h1>Todos os livros</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.nome}</h2>
            <p>{post.genero}</p>
            <Link to={`/produto/${post.id}`}>
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Catalogo;