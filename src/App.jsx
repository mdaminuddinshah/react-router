// import Headers from "./components/Headers.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Root.jsx";

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
