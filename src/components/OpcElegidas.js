import React, { Component } from "react";

class OpcElegidas extends Component{
        render() {
                return (
                         <div className="recordatorio">
                                 <h3>Eleccion Anterior:{this.props.opcionAnterior}</h3>
                                 <h4>Historial de Opciones Elegidas</h4>
                                 <ul>{this.props.historial}</ul>
                         </div>
                );
        }
}

export default OpcElegidas;
