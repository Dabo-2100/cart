import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ToDoPage from "./pages/ToDoPage";
export default function App() {
  return (
    <div className="col-12 App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="todo" element={<ToDoPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={"Page not found 404 Error"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
