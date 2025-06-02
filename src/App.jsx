import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Foods from "./Components/Foods/Foods";
import FoodRecipe from "./Components/FoodRecipe/FoodRecipe";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="//category/:categoryName" element={<Foods/>} />
        <Route path="/food/:idMeal" element={<FoodRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}
