import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/error/ErrorPage';
import Root from './components/root/Root';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './components/provider/AuthProvider';
import Rooms from './pages/rooms/Rooms';
import MyBookings from './pages/mybookings/MyBookings';
import Details from './pages/details/Details';
import BookRoom from './pages/bookroom/BookRoom';
import PrivateRoute from './components/privateroute/PrivateRoute';
import UpdateBooking from './pages/updateBooking/UpdateBooking';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/book/:id",
        element:<PrivateRoute><BookRoom></BookRoom></PrivateRoute> ,
        loader:({params}) => fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/mybookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      },
      {
        path: "/updatebooking",
        element: <PrivateRoute><UpdateBooking></UpdateBooking></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element:<Details></Details> ,
        loader:({params}) => fetch(`http://localhost:5000/rooms/${params.id}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
