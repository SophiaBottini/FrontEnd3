import React, { Component } from "react";
class Opc extends Component{
        render() {
        return(
                <div className="opciones">
                   <div className="opcion">
                        <button id="botonA" className="botones" onClick={this.props.handleClick}>
                                opcion A
                        </button>
                        <h2>{this.props.opcA}</h2>
                    </div>

                    <div className="opcion">
                        <button id="botonB" className="botones" onClick={this.props.handleClick}>
                                opcion B
                        </button>
                        <h2>{this.props.opcB}</h2>
                   </div>

                </div>
               )
        }
}
export default Opc;