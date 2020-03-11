import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {

   // //Definir el state

    const [cantidad, guardarCantidad] = useState(0); //State para la cantidad, cantidad contiene el valor, funcion para interactuar y guardar el state
    const [plazo, guardarPlazo] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    


    //Carga condicional de componentes
    let componente;

    if(cargando){
      
      componente = <Spinner />
    }
    else if(total === 0){
      componente = <Mensaje />
    } else{
      componente = <Resultado
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
      />
    }


  return (
      <Fragment> 
      
       <Header /* llamando a un componente */

            titulo="Cotizador de prestamos" //mandandole informacion al componente hijo
            // descripcion= 'Utiliza el formulario y obten una cotizacion'
            
       />  

       <div className="container">
         <Formulario
          cantidad= {cantidad}
          guardarCantidad= {guardarCantidad}
          plazo={plazo}
          guardarPlazo= {guardarPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
          guardarCargando={guardarCargando}
         />

        <div className="mensajes">
        {componente}
         </div>
        
       </div> 

       </Fragment>   
    
  );
}

export default App;


//en src se escriben los componentes, despues react se encarga de crear una version compilada(bundle) y luego se muestra en public
//App.js : Es el archivo principal, va a contener todos los demas componentes
//Fragment es como crear un div que no se muestra en el frontend
//Hay distintos tipos de componentes
//En react los datos fluyen desde el componente principal hacia los componentes hijos
//La ventaja de tener los states en el componente padre es que se puede comunicar con diferentes componentes al mismo tiempo
//Carga condicional de componentes: es cuando dada cierta condicion aparece un componente o no