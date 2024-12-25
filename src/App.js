import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './Page Components/MainNavbar';
// import MyNavbar from './Page Components/MyNavbar';
import Sidebar from './Page Components/Sidebar';
import View from './Page Components/View';
// import SignIn from './Page Components/SignIn';
import Register from './Page Components/Register';

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
              <Route path='/view' element={<View />} />
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
