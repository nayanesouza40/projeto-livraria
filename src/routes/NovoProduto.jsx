import blogFetch from "../model/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NovoProduto = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [autor_a, setAutor] = useState();
  const [pais, setPais] = useState();
  const [lancamento, setLancamento] = useState();
  const [editora, setEditora] = useState();
  const [genero, setGenero] = useState();
  const [total_de_paginas, setPaginas] = useState();
  const [valor, setValor] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { nome, autor_a, pais, lancamento, editora, genero, total_de_paginas, valor };

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
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="autor_a">Autor:</label>
          <input
            type="text"
            name="autor_a"
            id="autor_a"
            placeholder="Digite o nome do autor"
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
       
        <div>
          <label htmlFor="pais">País:</label>
          <input
            type="text"
            name="pais"
            id="pais"
            placeholder="Digite o país"
            onChange={(e) => setPais(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lancamento">lançamento:</label>
          <input
            type="text"
            name="lancamento"
            id="lancamento"
            placeholder="Digite o mês e ano de lançamento"
            onChange={(e) => setLancamento(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="editora">Editora:</label>
          <input
            type="text"
            name="editora"
            id="editora"
            placeholder="Digite a editora"
            onChange={(e) => setEditora(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="genero">Gênero:</label>
          <input
            type="text"
            name="genero"
            id="genero"
            placeholder="Digite o gênero"
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="total_de_paginas">Total de páginas:</label>
          <input
            type="number"
            name="total_de_paginas"
            id="total_de_paginas"
            placeholder="Páginas"
            onChange={(e) => setPaginas(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="valor">Valor:</label>
          <input
            type="text"
            name="valor"
            id="valor"
            placeholder="Digite o valor"
            onChange={(e) => setValor(e.target.value)}
          />
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default NovoProduto;