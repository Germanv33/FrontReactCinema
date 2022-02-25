import React, {useEffect, useState} from "react";
import UserStore from '../../stores/loginStore';
import UserModel from '../../types/userType';
import './registrationStyle.sass';
import logo from "../../content/svg/logo.svg";
import {NavLink} from "react-router-dom";


export default function RegForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPasswords, setErrorPasswords] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
 
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [formValid, setFormValid] = useState(false)

    const emailHandler = (e: any) => {
        setEmail(e.target.value);
        if (email != null) {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase()))) {
                setEmailDirty(true);
            } else {
                setEmailDirty(false);
            }
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value);
    }

    const repeatPasswordHandler = (e: any) => {
        setRepeatPassword(e.target.value);
    }

    useEffect(() => {
        if (password === repeatPassword && password.length > 3) {
            setPasswordDirty(false);
        } else {
            setPasswordDirty(true);
        }

        if (!passwordDirty && !emailDirty) {
            setFormValid(true);
        } else {
            setFormValid(false);

        
        }


    }, [password, repeatPassword, passwordDirty, emailDirty]);

    const submitRegForm = (e: any) => {
        e.preventDefault();
        if( (password === repeatPassword)) {
            console.log(password === repeatPassword);
            if((UserStore.checkUserByEmail(email) === undefined)) {
                setErrorMessage("")
                setErrorPasswords(false);
                setErrorEmail(false);
                window.location.href = "/collection"
            } else {
                setErrorMessage("Данный email уже занят")
            }
        } else {
            setErrorMessage("Пароли не совпадают")
        }
    }

   

    return(
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <form className="registration-form">

                    <input onChange={e => emailHandler(e) } value={email} name='email' type="email" placeholder="Адрес электронной почты" className="email" required/>

                    <input onChange={e => passwordHandler(e) } value={password} name='password' type="password" placeholder="Пароль" className="password" required/>
                    
                    <input  onChange={e => repeatPasswordHandler(e) } name='repeatedPassword' type="password" placeholder="Повторный пароль" className="password" required/>
            
                    {
                        (emailDirty ?  ( <div className="error"> <p>Неверный email</p> </div>) : (<div className="error"> <p> </p> </div>))
                    }
                    {
                        (passwordDirty ?  ( <div className="error"> <p>Неверный пароль </p> </div>) : (<div className="error"> <p></p> </div>))
                    }
                    {
                        (errorMessage !== "" ?  ( <div className="error"> <p> {errorMessage} </p> </div>) : (<div className="error"> <p></p> </div>))
                    }





                    
                    <button disabled={!formValid} onClick={(e) => submitRegForm(e)}  type="submit" className="button">
                        Регистрация
                    </button>
    
                    <div className="prompt">
                        <p>Еще не зарегистрированы?</p>
                        
                        <NavLink to="/signIn">Войти</NavLink>
                    </div>
                </form>
            </div>
        </div>
        )
    };
    