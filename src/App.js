
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login'
import Signup from './components/Signup'
import Table  from './components/Table';
function App() {
  return (
    <div >
  <BrowserRouter>
    <Routes>
      <Route path="/test" element={<>hello</>}/>
      <Route path="/loginpage" element={<Login />}>

        </Route>
        <Route path="/signupage" element={<Signup />}></Route>
        <Route path="/Table" element={<Table />}></Route>
    </Routes>
  </BrowserRouter>
       
    </div>
  );
}

export default App;
