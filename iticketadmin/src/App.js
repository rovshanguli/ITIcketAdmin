import './assets/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import Navbar from './components/layout/Navbar'
import EventTable from './components/Event/EventTable';
function App() {
  return (
    <Router>
      <div className="container-scroller">
        <Navbar />
        <div className='container-fluid page-body-wrapper'>
          <SideBar />

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
               <Routes>
                 <Route path="/events" element={<EventTable/>}/>
               </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
