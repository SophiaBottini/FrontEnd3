import React, { Component } from "react";
import data from "./data";
import OpcElegidas from "./OpcElegidas";
import Opc from "./Opc";

class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historia: [],
      cont: 0,
      opcionAnterior: "",
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.cont !== this.state.cont) {
      this.state.historia.push(this.state.opcionAnterior);
    }
  }



  buscasId = (id) => {
    const nuevoArray =data.filter(obj=> obj.id === id);
    return nuevoArray[0];
  }

 

  handleClick = (e) => {
    const opcion = e.target.id;
    if (this.state.cont >= 7) {
      alert("Fin.");
    } else if (opcion === "botonA" && this.state.opcionAnterior !== "A") {
      this.setState({
        cont: this.state.cont + 1,
        opcionAnterior: "A",
      });
    } else if (opcion === "botonA" && this.state.opcionAnterior === "A") {
      this.setState({
        cont: this.state.cont + 2,
      });
    } else if (opcion === "botonB" && this.state.opcionAnterior === "A") {
      this.setState({
        cont: this.state.cont + 3,
        opcionAnterior: "B",
      });
    } else if (opcion === "botonB") {
      this.setState({
        cont: this.state.cont + 2,
        opcionAnterior: "B",
      });
    }
  };
 

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.cont].historia}</h1>

        <Opc
          handleClick={this.handleClick}
          opcA={data[this.state.cont].opciones.a}
          opcB={data[this.state.cont].opciones.b}
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
