// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <RouterProvider router={Routes} />
  )
}

export default App
