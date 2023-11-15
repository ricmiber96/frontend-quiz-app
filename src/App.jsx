import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Layout from './components/Layout/Layout'
import Results from './pages/Results'

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
        },
        {
          path: '/results',
          element: <Results/>
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
