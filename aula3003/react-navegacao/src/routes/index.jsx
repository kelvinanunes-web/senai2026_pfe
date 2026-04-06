import { Routes, Route } from "react-router-dom";

//import das paginas
import Principal from '../pages/principal';
import Sobre from '../pages/sobre'

export default function Rotas(){
    return(
    <Routes>
        <Route path="/" element={<Principal/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
    </Routes>
    )
}
