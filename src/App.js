// Routing
import { Routes, Route, Outlet } from 'react-router-dom';
// Components
import Home from './routes/Home/Home';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I AM THE NAVBAR</h1>
      </div>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;