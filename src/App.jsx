import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router'
import MainLayout from './layouts/MainLayout';
import Orders from './pages/Orders';
import SingleOrder from './pages/SingleOrder';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Orders />} />
        <Route path='/order' element={<SingleOrder />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App