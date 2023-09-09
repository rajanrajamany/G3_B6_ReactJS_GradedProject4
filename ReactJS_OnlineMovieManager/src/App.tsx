import {useState,useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import MoviesList from './components/MoviesList';
import {NavigationMenu} from './components/NavigationMenu'
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import IDataList from './model/IDataList';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RouteList from './components/MoviePage';
import MoviePage from './components/MoviePage';
import './App.css';

function App() {
  return (
    <>  
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />  
    <MoviePage />
  </>
  );
}

export default App;
