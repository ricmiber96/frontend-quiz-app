import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Layout from './components/Layout/Layout'

function App () {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/:type',
          element: <Quiz/>
        }
      ]
    }
  ]
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
