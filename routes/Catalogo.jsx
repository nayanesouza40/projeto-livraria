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
            <Link to={`/produto/${post.id}`}>
              <h2>{post.nome}</h2>
            </Link>
            <h3>{post.autor_a}</h3>
            <p>{post.valor}</p>                    
          </div>
        ))
      )}
    </div>
  );
};

export default Catalogo;