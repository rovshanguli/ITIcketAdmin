import './assets/css/style.css'
import SideBar from './components/layout/SideBar';
import Event from './components/pages/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >

      <Router>
        <div className='row'>

          <div className="col-2 m-0 p-0">
            <SideBar />
          </div>

          <div className="col-9 m-0 p-0">
            <Routes>
              <Route exact path='/event' element={<Event />} />
            </Routes>
          </div>

        </div>
      </Router>

    </div>
  );
}

export default App;
