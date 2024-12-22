import './App.css';
import MainNavbar from './Page Components/MainNavbar';
// import MyNavbar from './Page Components/MyNavbar';
import Sidebar from './Page Components/Sidebar';

function App() {
  return (
    <>
      <div className='d-flex'>
        <div className='w-auto'>
          <Sidebar />
        </div>
        <div className='col'>
          <MainNavbar />
        </div>
      </div>
      {/* <MyNavbar/> */}

    </>
  );
}

export default App;
