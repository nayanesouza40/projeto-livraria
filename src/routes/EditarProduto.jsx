import blogFetch from "../model/axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./EditarProduto.module.css"

const EditarProduto = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [autor_a, setAutor] = useState();
  const [pais, setPais] = useState();
  const [lancamento, setLancamento] = useState();
  const [editora, setEditora] = useState();
  const [genero, setGenero] = useState();
  const [total_de_paginas, setPaginas] = useState();
  const [valor, setValor] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/Livro/${id}`);

      const data = response.data;

      console.log(data);

      setNome(data.nome);
      setAutor(data.autor_a);
      setPais(data.pais);
      setLancamento(data.lancamento);
      setEditora(data.editora);
      setPaginas(data.total_de_paginas);
      setValor(data.valor);
      setGenero(data.genero);
    } catch (error) {
      console.log(error);
    }
  };

  const editarProduto = async (e) => {
    e.preventDefault();

    const post = { nome, autor_a, pais, lancamento, editora, genero, total_de_paginas, valor };


    await blogFetch.put(`/Livro/${id}`, post);

    navigate("/");
  };

    
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h1 className={style.h2createPost}>Editando: {nome}</h1>
      <form onSubmit={(e) => editarProduto(e)} className={style.createPost}>
                
      <div className={style.cols}>
        <section className={style.col1}>        
        <div>
          <label htmlFor="nome">Título:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome || ""}
          />
        </div>

        <div>
          <label htmlFor="autor_a">Autor:</label>
          <input
            type="text"
            name="autor_a"
            id="autor_a"
            onChange={(e) => setAutor(e.target.value)}
            value={autor_a || ""}
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
            value={genero || ""}
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
            value={pais || ""}
          />
        </div>
        </section>
        <section className={style.col2}>
        <div>
          <label htmlFor="lancamento">Lançamento:</label>
          <input
            type="text"
            name="lancamento"
            id="lancamento"
            placeholder="Digite o mês e ano de lançamento"
            onChange={(e) => setLancamento(e.target.value)}
            value={lancamento || ""}
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
            value={editora || ""}
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
            value={total_de_paginas || ""}
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
            value={valor || ""}
          />
        </div>
        </section>
        </div>
        <input type="submit" value="Salvar"  className={style.botaoCreatePost}/>
      </form>
    </div>
  );
};

export default EditarProduto;