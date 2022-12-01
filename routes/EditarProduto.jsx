import blogFetch from "../scripts/axios";

import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

const EditarProduto = () => {
  const navigate = useNavigate();

  const [nome, setTitle] = useState();
  const [genero, setBody] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/Livro/${id}`);

      const data = response.data;

      console.log(data);

      setTitle(data.nome);
      setBody(data.genero);
    } catch (error) {
      console.log(error);
    }
  };

  const editarProduto = async (e) => {
    e.preventDefault();

    const post = { nome, genero };

    await blogFetch.put(`/Livro/${id}`, post);

    navigate("/");
  };

    
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h2>Editando: {nome}</h2>
      <form onSubmit={(e) => editarProduto(e)}>
        <div>
          <label htmlFor="nome">Título:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            value={nome || ""}
          />
        </div>
        <div>
          <label htmlFor="genero">Título:</label>
          <textarea
            name="genero"
            id="genero"
            placeholder="Digite o conteúdo..."
            onChange={(e) => setBody(e.target.value)}
            value={genero || ""}
          ></textarea>
        </div>
        <input type="submit" value="Editar"  />
      </form>
    </div>
  );
};

export default EditarProduto;