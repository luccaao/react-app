import React, { Component } from "react";
import "./estilo.css"

export default class FormularioCadastro extends Component {


  constructor(props) {
    super(props)
    this.titulo="";
    this.texto="";
  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarNota(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
    
  }
  

  render() {
    return (
      <div className="container-form">
        <form className="formulario"
        onSubmit={this._criarNota.bind(this)}>
          <input 
          className="form-cadastro_input" 
          type="text" 
          placeholder="Titulo" 
          onChange={this._handleMudancaTitulo.bind(this)}
          />
          <textarea 
          rows={15} 
          placeholder="Mensagem"
          onChange={this._handleMudancaTexto.bind(this)} />
          <button className="form-cadastro_input">Criar nota</button>
        </form>
      </div>
    );
  }
}
