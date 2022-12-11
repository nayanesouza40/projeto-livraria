import blogFetch from "../model/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NovoProduto.module.css"

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
  const [capa, setCapa] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { nome, autor_a, pais, lancamento, editora, genero, total_de_paginas, valor ,capa};
    await blogFetch.post("/Livro", post);
    navigate("/");
  };

  return (
    <div>

      
      <form onSubmit={(e) => createPost(e)} className={style.createPost}>
       <h1 className={style.h2createPost}>Cadastro de novos livros</h1>
       <div className={style.cols}>
        <section className={style.col1}>
        
        <div>
          <label htmlFor="nome">Título:</label>
          <input type="text" name="nome" id="nome" placeholder="Digite o título" onChange={(e) => setNome(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="autor_a">Autor:</label>
          <input type="text" name="autor_a" id="autor_a" placeholder="Digite o nome do autor" onChange={(e) => setAutor(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="genero">Gênero:</label>
          <input type="text" name="genero" id="genero" placeholder="Escolha o gênero" onChange={(e) => setGenero(e.target.value)}/>
        </div>
       
      
        <div>
          <label htmlFor="pais">País:</label>
          <input type="text" name="pais" id="pais" placeholder="Digite o país" onChange={(e) => setPais(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="capa">Capa:</label>
          <input type="text" name="capa" id="capa" placeholder="Digite o nome do arquivo" onChange={(e) => setCapa(e.target.value)}/>
        </div>
        </section>

        <section className={style.col2}>
        <div>
          <label htmlFor="lancamento">Lançamento:</label>
          <input type="date" name="lancamento" id="lancamento" placeholder="Digite o mês e ano de lançamento" onChange={(e) => setLancamento(e.target.value)}/>
        </div>
                
        <div>
          <label htmlFor="editora">Editora:</label>
          <input type="text" name="editora" id="editora" placeholder="Digite a editora" onChange={(e) => setEditora(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="total_de_paginas">Total de páginas:</label>
          <input type="number" name="total_de_paginas" id="total_de_paginas" placeholder="Páginas" onChange={(e) => setPaginas(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="valor">Valor:</label> 
          <input type="text" name="valor" id="valor" placeholder="Digite o valor" onChange={(e) => setValor(e.target.value)}/>
        </div>
        </section>
        </div>
        <input type="submit" value="Cadastrar" className={style.botaoCreatePost} />
        <input type="reset" value="Limpar" className={style.botaoResetPost} />
      </form>
    </div>
  );
};

export default NovoProduto;