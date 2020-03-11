import React, {Fragment} from 'react'


//COMPONENTE

// function Header({titulo}){ // recibiendo los datos con props

//     //console.log(props);

//     // lo que se coloca dentro del return se muestra en pantalla
//     return( 
//             <Fragment>
//             <h1>{titulo}</h1> 
            
//             </Fragment>
//     )
// }

const Header  = ({titulo}) => ( // Otra forma de declarar componentes, con esta forma se puede dar por implicito el return
     
        <Fragment>
        <h1>{titulo}</h1> 
        </Fragment>
     );

 
//export default ;

export default Header;





/*El tamaño de los componentes de react varia

Un componente es una funcion
Un componente tambien es reutilizable
Cuando se hace return siempre hay que retonar un elemento que contenga los demas elementos
Se puede pasar informacion desde el componente principal hacia el otro
React utiliza jsx, esta tecnologia pemite mezclar html con js
Lo que esta dentro de los corchetes se puede interpretar como codigo js
// imprimiendo la informacion recibida (13)
Se puede aplicar destructuring en los parametros del componente para reemplazar el parametro de props
<p>{props.descripcion}</p>
El codigo que esta por fuera del return es un lugar seguro para crea codigo js
Si damos por implicito el return no tendriamos acceso a escribir codigo js en el componente porque no hay donde colocarlo
*/