import React, {FC, useContext, useEffect, useState} from 'react';
import './FilmPageStyle.sass';
// import {ContextStore} from "../../stores/ContextStore";
import { useParams } from 'react-router-dom';
import futureWatch from "../../content/svg/FutureWatch.svg"
import TopHeader from "../../components/header/header"
import store from '../../stores/mainStore';
import { observer } from 'mobx-react';


const FilmPage = () => {

    const {id} = useParams();
    
    

    const films = store.filmStore.filmCollection
    const film = films.find(film => String(film.id) === id);
    
    if (film != undefined) {
        return (

            <main className="full_container">
                <TopHeader/>
                <div className="film_container">
                    <img src={film.img} className="film_poster"/>

                    <div className="film_info">
                        <h1 className="title_of_film">
                            {film.title}
                        </h1>

                        <div className="row_year_and_rate">

                            <p>
                                2013
                            </p>
                            <div className="rate_container_film">
                                {film.rate}
                            </div>

                        </div>

                        <button className="gonna_watch_button">
                        <img src={futureWatch} className="plus"/> Буду смотреть
                        </button>

                        <p className="description_film">
                            {film.description}
                        </p>

                        <div className='genre_container'>
                            {
                                film.genre?.map((genre) => <div className='genre'>{genre}</div>)
                            }
                        </div>

                    </div>
                </div>
            </main>
        );
    } else return (
        <p>ERROR: No such film :ERROR</p>
    );
}

export default observer(FilmPage);