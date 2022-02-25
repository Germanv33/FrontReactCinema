import './header.sass';
import collections from "../../content/svg/collections.svg";
import add from "../../content/svg/add.svg";
import logo from "../../content/svg/Logo_Short.svg";
import React, { FC } from "react";
import {NavLink} from "react-router-dom";
import search from "../../content/svg//search.svg";
import profile from "../../content/svg/profile.svg"



export const TopHeader: FC = () =>{
    return(
        <div className="header">
            <div className="menu">

                <div className="left-side">
                    <NavLink to="#" className="collection-button">
                        <img src={collections} className="collections-img" alt="collections-img"/>
                        <span>Коллекция</span>
                    </NavLink>

                    <NavLink to="#" className="add-button">
                        <img src={add} className="add-img" alt="add-img"/>
                        <span>Добавить</span>
                    </NavLink>
                </div>
                
                <NavLink to="/collection" className="app-logo">
                    <img src={logo}  alt="logo"/>
                </NavLink>

                <div className="search-and-profile">
                    <img src={search} className="search-img" alt="search-img"/>
                    <input className="search-input" placeholder='Поиск' type='text'/>
                    <img src={profile} className="image-profile" alt="image-profile"/>
                </div>
            </div>
        </div>
    );
};
export default TopHeader