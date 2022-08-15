// import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
// import { TiposBasicos } from "./typescript/TiposBasicos"
// import { Contador } from './components/Contador';
// import { ContadorConHook } from './components/ContadorConHook';
// import { Funciones } from './typescript/Funciones';
// import { Login } from './components/Login';

import { Formularios } from "./components/Formularios"

// import { Usuarios } from "./components/Usuarios"

const App = () => {
  return (
    <div className="mt-2">
      <h1>
        Introduccion a TypeScript
        <hr/>
        {/* <TiposBasicos /> */}
        {/* <ObjetosLiterales /> */}
        {/* <Funciones/> */}
        {/* <Contador /> */}
        {/* <ContadorConHook /> */}
        {/* <Login /> */}
        {/* <Usuarios /> */}
        <Formularios />
      </h1>
    </div>
  )
}

export default App;