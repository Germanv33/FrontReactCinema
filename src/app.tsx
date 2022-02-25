import React from 'react';
import './App.css';
import Form from "./pages/login/loginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/registration/registration";
import Collection from "./pages/collection/collection";
import {Provider} from "mobx-react";
import store from "./stores/mainStore";
import FilmPage from "./pages/film/FilmPage";


const App = () => (
    <Router>
        <Provider {...store}>
            <Routes>
                <Route path="/" element={<Form/>}/>
                <Route path="/signIn" element={<Form/>}/>
                <Route path="/registration" element={<RegistrationForm/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path='/film/:id'  element={<FilmPage/> }/>
            </Routes>
        </Provider>
    </Router>
);

export default App;