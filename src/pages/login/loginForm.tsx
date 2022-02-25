import React, {useContext, useEffect, useState} from 'react';
import './loginFormStyle.sass';
import logo from "../../content/svg/logo.svg";
import {NavLink} from "react-router-dom";
import store from '../../stores/mainStore';


const Form = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [emailError, setErrorEmail] = useState(false);
    const [error, setError] = useState("");

    const userStore = store.userStore;

    useEffect(() => {
        if (emailError || password === ''){
            setFormValid(false);
        }else {
            setFormValid(true);
        }
    }, [emailError]);
    

    const emailHandler = async (e: any) => {

        setEmail(e.target.value)
    
        if (email != null) {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase()))) {
                setErrorEmail(true);
            } else {
                setErrorEmail(false);
            }
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value);
    }
    
    const submitHandler = ((e: any) => {

        e.preventDefault();
        let user = userStore.checkUser(email, password);

        if (user === undefined) {
            setError("Неправильный логин или пароль");
        } else {
            window.location.href = "/collection";
        }
        });

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <form>
                    <input  onChange={e => emailHandler(e) } value={email} name='email'  type="email" placeholder="Адрес электронной почты" className="email"/>
                    <input  onChange={e => passwordHandler(e) } value={password} name='password'  type="password" placeholder="Пароль" className="password"/>
                    {
                        (emailError) &&
                        <div className="error">
                            <p> Неверный email</p>
                        </div>
                    }
                    {
                        (error !== '') &&
                        <div className="error">
                            <p> {error}</p>
                        </div>
                    }
                        <button type="submit" onClick={(e) => submitHandler(e)}disabled={!formValid} className="button">
                            Войти
                        </button>
                    
                    <div className="prompt">
                        <p>Еще не зарегистрированы?</p>
                        <NavLink to="/registration">Регистрация</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form