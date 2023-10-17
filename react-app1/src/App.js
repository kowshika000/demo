import "./App.css";
import Form from "./Components/MediumComponent/Form";
import Table from "./Components/MediumComponent/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="read" element={<Table />} />
        <Route path="/:id" element={<Form />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
