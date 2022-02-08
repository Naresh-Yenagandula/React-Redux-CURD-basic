import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/add';
import Show from './components/Show';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Edit from './components/edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Show />} />
        <Route exact path='/add' element={<Add />} />
        <Route exact path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
