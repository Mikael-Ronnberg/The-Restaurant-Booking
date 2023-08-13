import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './pages/Admin/Admin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Booking } from './pages/Booking/Booking';
import { Contact } from './pages/Contact/Contact';
import { BookingForm } from './components/BookingForm/BookingForm';
import { BookingView } from './components/BookingView/BookingView';
import { DeleteBooking } from './components/DeleteBooking/DeleteBooking';
//import { AddBooking } from "./components/AddBooking/AddBooking";
import { UpdateBooking } from './components/UpdateBooking/UpdateBooking';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/booking',
    element: <Booking></Booking>,
  },
  {
    path: '/deleteBooking',
    element: <DeleteBooking></DeleteBooking>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
  },
  // {
  //   path: "/addbooking",
  //   element: <AddBooking></AddBooking>,
  // },
  {
    path: '/admin',
    element: <Admin></Admin>,
  },
]);
