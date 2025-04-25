import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signin, Signup } from "./components/ui/Auth";
import { Dashboard } from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/signup" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
