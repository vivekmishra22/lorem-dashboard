import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './Page Components/MainNavbar';
import Sidebar from './Page Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardForm from './Page Components/CardForm';
import CardDetails from './Page Components/CardDetails';
import Users from './Page Components/Users';
import Register from './Page Components/Register';
// import CardUpdate from './Page Components/CardUpdate';

function App() {
  return (
    <>

      <BrowserRouter >

        <div className='d-flex'>
          <div className='w-auto'>
            <Sidebar />
          </div>
          <div className='col'>
            <MainNavbar />

            <Routes>
              <Route path='/carddetails' element={<CardDetails />} />
              <Route path='/cardform' element={<CardForm />} />
              <Route path='/user' element={<Users />} />
              <Route path='/register' element={<Register />} />
            </Routes>

          </div>
        </div>
      </BrowserRouter>

      {/* <MyNavbar/> */}



    </>
  );
}

export default App;
