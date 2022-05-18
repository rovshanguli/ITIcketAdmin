import './assets/css/style.css'
import SideBar from './components/layout/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >

      <Router>
        <div>



          <Routes>

            <Route exact path="/" element={<SideBar />} />
          </Routes>

        </div>
      </Router>

    </div>
  );
}

export default App;
