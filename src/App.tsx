import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

  import { ToastContainer } from 'react-toastify';
import LayOut from './comp/LayOut/LayOut';
import Home from './comp/Home/Home';
import AboutUsMain from './comp/AboutUs/AmoutUsMain';
import SupportUs from './comp/SupportUs/SupportUsMain';
import NewsMain from './comp/News/NewsMain';
import CountactUsMain from './comp/ContactUs/CountactUsMain';


function App() {


  let router:any = createBrowserRouter([

     {
      path: "", element: <LayOut />, children: [
        { index : true , element: <Navigate to="home" replace />},
        { path : "home" , element: <Home/> },
        { path : "aboutus" , element: <AboutUsMain/> },
        { path : "supportus" , element: <SupportUs/> },
        { path : "news" , element: <NewsMain/> },
        { path : "contactus" , element: <CountactUsMain/> },
      
    ],
    }
  ])




 const queryClient = new QueryClient()

  return <>

 
     <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
    </QueryClientProvider>
     <ToastContainer/>

  </>
}

export default App
