import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import ChocolateInfo from "./pages/ChocolateInfo"
import CoffeInfo from "./pages/CoffeInfo"
import CoffeMachine from "./pages/CoffeMachine"
import TeaInfo from "./pages/TeaInfo"

import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<CoffeMachine/>}/>
                <Route path="/coffee" element={<CoffeInfo/>}/>
                <Route path="/tea" element={<TeaInfo/>}/>
                <Route path="/chocolate" element={<ChocolateInfo/>}/>
            </Route>
        </Routes>
    )
}

export default App
