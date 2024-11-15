import './assets/css/style.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProjectPage from './component/ProjectPage.jsx';
import Board from './pages/Board.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='project/*' element={<ProjectPage />} >
            <Route path='board' element={<Board />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
