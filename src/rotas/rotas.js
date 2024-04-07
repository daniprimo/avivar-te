import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PaginaPrincipal from "../pages/home/paginaPrincipal";

export default function Rotas() {
    return (<>
        <Router>
            <Routes>
                {/*<Route path="/" element/>*/}
                <Route path="/"  element={<PaginaPrincipal />}/>
            </Routes>
        </Router>
    </>)
}