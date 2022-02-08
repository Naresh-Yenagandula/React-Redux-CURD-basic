import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/add';
import Show from './components/Show';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Show />} />
        <Route exact path='/add' element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
