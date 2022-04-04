import React, { Component } from "react";
import data from "./data";
import OpcElegidas from "./OpcElegidas";
import Opc from "./Opc";

class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historiaActual: this.buscarHistoriaPorId("1"),
      historia: [],
      cont: 1,
      opcionAnterior: "",
    }
    this.handleClick=this.handleClick.bind(this)
  }

  buscarHistoriaPorId=(id)=>{
    const historiaActual=data.filter(item=>item.id===id);
    return historiaActual[0]
  }

handleClick(e){
  const seleccion=(e.target.id).toLowerCase();

  if(this.state.cont ===5){
    alert("Fin!")
  }else{
    this.setState({
      cont: this.state.cont+1,
      historiaActual: this.buscarHistoriaPorId(this.state.cont+1+seleccion),
      opcionAnterior: seleccion,
    })
  }
}


  componentDidUpdate(prevState) {
    if (prevState.cont !== this.state.cont) {
      this.state.historia.push(this.state.opcionAnterior);
    }
  }




  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.historiaActual.historia}</h1>

        <Opc
          handleClick={this.handleClick}
          opcA={this.state.historiaActual.opciones.a}
          opcB={this.state.historiaActual.opciones.b}
        />
        <OpcElegidas
          opcionAnterior={this.state.opcionAnterior}
          historial={this.state.historia.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        />
      </div>
    );
  }
}

export default Contenido;
