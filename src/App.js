import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import TopRibbon from './components/HomeComponent/topribbon';

import Home from './components/HomeComponent/home';
import Login from './components/login';
import Complaints from './components/complaints';
import Procurement from './components/procurement';
import Public_Documents from './components/public-documents';
import Signup from './components/signup';
import ProjectMis from './components/projectmis';
import Careers from './components/careers';

import BottomRibbon from './components/HomeComponent/BottomRibbon';
import Footer from './components/HomeComponent/Footer'; 



function App() {
  return (
    <div >
      <div>
      <TopRibbon />
      </div>

      <nav className="navbar navbar-expand-lg navbar-green">
  <div className='container-fluid' >
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/procurement">
          Procurement
        </Link>
        <Link className="nav-link" to="/public-documents">
          Public Documents
        </Link>
        <Link className="nav-link" to="/complaints">
          Complaints
        </Link>
        <Link className="nav-link" to="/projectmis">
          Project MIS
        </Link>
        <Link className="nav-link" to="/careers">
          Careers
        </Link>
      </div>
      <div className="navbar-buttons d-flex">
        <Link
          style={{ textDecoration: "none", marginRight: "10px" }}
          to="/login"
        >
          <button className="btn btn-outline-light" type="button">
            Login
          </button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <button className="btn btn-yellow" type="button">
            Signup
          </button>
        </Link>
      </div>
    </div>
  </div>
</nav>

<div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/procurement" element ={<Procurement />}/>
      <Route path='/public-documents' element={<Public_Documents/>} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/projectmis" element={<ProjectMis/>} />
      <Route path="/careers" element={<Careers/>} />
    </Routes>
</div>

<div>
  <BottomRibbon/>
  <Footer/>
</div>
    </div>
  );
}

export default App;
