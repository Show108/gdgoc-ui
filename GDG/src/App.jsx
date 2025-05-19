import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";


function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap routes with Layout */}
        <Route path="/" element={<Layout />}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;