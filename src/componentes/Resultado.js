import React from 'react'

const Resultado = (props) => (
    <div className="u-full-width resultado">
        <h2><b><i>Resumen</i></b></h2>
        <p><b><i>La cantidad solitada es: $ {props.cantidad}</i></b></p>
        <p><b><i>A pagar en: {props.plazo} meses</i></b></p>
        <p><b><i>Su pago mensual es de: $ {(props.total / props.plazo).toFixed(2)} </i></b></p>
        <p><b><i>Total a pagar: ${(props.total).toFixed(2)}</i></b></p>
    </div>
);


export default Resultado;