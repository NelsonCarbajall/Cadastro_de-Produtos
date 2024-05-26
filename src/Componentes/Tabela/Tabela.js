import React, { useState } from "react";
import "./Tabela.css";


function Tabela(){

  


  const [produto, setProduto] = useState("");
  const [codigo, setCodigo] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [custo, setCusto] = useState("");
  const [obs, setObs] = useState("");
  const [dados, setDados] = useState([]);

  const handleChange = (event) => {
    setProduto(event.target.value);
  };

  const handleCode = (event) => {
    setCodigo(event.target.value);
  };

  const handleType = (event) => {
    setTipo(event.target.value);
  };

  const handleCate = (event) => {
    setCategoria(event.target.value);
  };

  const handlePrec = (event) => {
    setPreco(event.target.value);
  };

  const handleCust = (event) => {
    setCusto(event.target.value);
  };

  const handleObs = (event) => {
    setObs(event.target.value);
  };

  const handleSubmit = () => {
    const novoDado = {
      codigo: codigo,
      tipo: tipo,
      produto: produto,
      categoria: categoria,
      preco: preco,
      custo: custo,
      obs: obs
    };
    setDados([...dados, novoDado]);
  };

  return (
    <div className="box">
      <h1>Formulário de Registro de Produto</h1>
      <div className="rapper">
        <form>
          <div className="input_box">
            <label className="ll">Codigo do produto</label>
            <input
              type="text"
              placeholder="Código do Produto ...."
              onChange={handleCode}
              required
            />
          </div>
          <div className="input_box">
            <label className="ll">Marca do Produto</label>
            <input
              type="text"
              placeholder="Marca do Produto ...."
              onChange={handleChange}
              required
            />
          </div>
          <div className="input_box">
            <label className="ll">Tipo do Produto</label>
            <input
              type="text"
              placeholder="Tipo do Produto ...."
              onChange={handleType}
              required
            />
          </div>
          <div className="input_box">
            <label className="ll">Categoria do Produto</label>
            <input
              type="text"
              placeholder="Categoria do Produto ...."
              onChange={handleCate}
              required
            />
          </div>
          <div className="input_box">
            <label className="ll">Preço Unitario</label>
            <input
              type="text"
              placeholder="Preço Unitario ...."
              onChange={handlePrec}
              required
            />
          </div>
          <div className="input_box">
            <label className="ll">Custo</label>
            <input
              type="text"
              placeholder="Custo ...."
              onChange={handleCust}
              required
            />
          </div>
          <div className="input_box">
            <label className="ll">Observações</label>
            <input
              type="text"
              placeholder="Observações ...."
              onChange={handleObs}
              required
            />
          </div>
          
          {/* Outros campos do formulário */}
          <div className="botao">
            <button type="button"  onClick={handleSubmit}>
              Enviar
            </button>
            <button type="reset">Limpar</button>
          </div>
        </form>
      </div>
      <div className="Tabela">
        <table>
         
            <tr>
              <th>Codigo do Produto</th>
              <th>Marca do Produto</th>
              <th>Tipo do Produto</th>
              <th>Categoria do Produto</th>
              <th>Preço Unitario</th>
              <th>Custo</th>
              <th>Observações</th>
            </tr>
          
            {dados.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.produto}</td>
                <td>{item.tipo}</td>
                <td>{item.categoria}</td>
                <td>{item.preco}</td>
                <td>{item.custo}</td>
                <td>{item.obs}</td>
              </tr>
            ))}
          
        </table>
      </div>
    </div>
  );
};

export default Tabela;
