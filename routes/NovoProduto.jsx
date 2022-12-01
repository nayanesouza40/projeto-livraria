import blogFetch from "../scripts/axios";

import { useState } from "react";

import { useNavigate } from "react-router-dom";


const NovoProduto = () => {
  const navigate = useNavigate();

  const [nome, setTitle] = useState();
  const [genero, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { nome, genero };

    await blogFetch.post("/Livro", post);

    navigate("/");
  };

  return (
    <div>
      <h2>Inserir novo Livro:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div>
          <label htmlFor="nome">Título:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="genero">Genero:</label>
          <textarea
            name="genero"
            id="genero"
            placeholder="Digite o conteúdo..."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default NovoProduto;