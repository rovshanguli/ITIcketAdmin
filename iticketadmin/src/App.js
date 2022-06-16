import './assets/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import Navbar from './components/layout/Navbar'
import EventTable from './components/Event/EventTable';
import CreateEvent from './components/Event/CreateEvent';
import HallTable from './components/Hall/HallTable';
import HallCreate from './components/Hall/HallCreate';
import SliderTable from './components/Slider/SliderTable';
import SliderCreate from './components/Slider/SliderCreate';
import CategoryTable from './components/Category/CategoryTable';
import CategoryCreate from './components/Category/CategoryCreate';
import UpdateCategory from './components/Category/UpdateCategory';
import HallUpdate from './components/Hall/HallUpdate';
import SliderUpdate from './components/Slider/SliderUpdate';
import Login from './components/Account/Login'

import UpdateEvent from './components/Event/UpdateEvent';
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
                  <Route path="/" element={<Login />} />
                  <Route path="/events" element={<EventTable />} />
                  <Route path="/eventcreate" element={<CreateEvent />} />
                  <Route path="/hallcreate" element={<HallCreate />} />
                  <Route path="/halls" element={<HallTable />} />
                  <Route path="/slider" element={<SliderTable />} />
                  <Route path="/slidercreate" element={<SliderCreate />} />
                  <Route path="/category" element={<CategoryTable />} />
                  <Route path="/categorycreate" element={<CategoryCreate />} />
                  <Route path="/categoryupdate/:id" element={<UpdateCategory />} />
                  <Route path="/hallupdate/:id" element={<HallUpdate />} />
                  <Route path="/sliderupdate/:id" element={<SliderUpdate />} />
                  <Route path="/eventupdate/:id" element={<UpdateEvent />} />
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
