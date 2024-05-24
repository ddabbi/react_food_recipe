import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Favorites from './pages/favorites/favorites'
import Details from './pages/details/details'
import Navbar from './components/navbar/navbar'
import DetailItem from './components/detail-item/detail-item'

// npm install reat-router-dom
// 리엑트 라우터를 사용하려면 index.js에서 
// <APP/> 컴포넌트를 <BrowserRouter>로 감싼다.
// 쿼리 파라미터(동적으로 URL를 설정하는 페이지)

function App() {
  return (
    <div className='base-container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
