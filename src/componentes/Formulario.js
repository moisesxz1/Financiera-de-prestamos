import React, { useState, Fragment } from 'react';
import { calcularTotal} from '../helpers.js';

const Formulario = (props) => {

    const { cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando } = props

    // State local
    const [error, guardarError] = useState(false)

    // const leerCantidad = (e) => {

    //}

    const calcularPrestamo = e => {

        e.preventDefault();

        //Validar

        if (cantidad === 0 || plazo === '') {
            guardarError(true);
            return; // para que no se ejecute la siguiente linea inmediatamente
        }

        guardarError(false);

        guardarCargando(true);

        setTimeout(() => {

            guardarCargando(false);
            //Realizar cotizacion
        const total = calcularTotal(cantidad,plazo);
        

        guardarTotal(total);
        },3000)
    }


    return (
        <Fragment>
        <form onSubmit={calcularPrestamo}>
            {cantidad}
            {plazo}
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange={e => guardarCantidad(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select
                        className="u-full-width"
                        onChange={e => guardarPlazo(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                </div>
            </div>
        </form>

            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}   {/*si error es true ejecutar el codigo*/}
        </Fragment>
    );
}

export default Formulario;

// lo que hace que las aplicaciones de react sean muy rapidas es lo que se conoce como el state
//Cada pieza de la aplicacion va a tener un state, todo lo que sea interactivo
// useState() retorna 2 valores,  el primero es una variable que contiene el valor, el otro es una funcion que va a ser utilizada para estar interactuando y guardando lo que es el state que estamos creando
//en useState se puede poner un valor inicial
//cantidad almacena el valor que tenga el state y guardarCantidad es la funcion que lo modifica
//onChange: se ejecuta cada vez que el usuario modifica el input
//e.target.value para acceder al valor del evento
//en react los valores fluyen del padre al hijo pero nunca del hijo al padre