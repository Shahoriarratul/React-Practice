import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes path="dashboard">
        <Route path="dashboard" element= {<Dashboard/> }/>
        <Route path="dashboard" element= {<Dashboard/> }/>
        <Route path="dashboard" element= {<Dashboard/> }/>
        <Route path="dashboard" element= {<Dashboard/> }/>
        <Route path="dashboard" element= {<Dashboard/> }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
