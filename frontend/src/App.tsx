import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Page/Login/Login';
import Main from './Page/Main/Main';

function App() {


  return (
    <>
      <Router>




        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
