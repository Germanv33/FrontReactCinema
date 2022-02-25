import {useContext, useEffect, useState} from "react";
import {FilmModel} from "../../types/filmType";

import "../../pages/collection/collectionStyle.sass";
import {Link} from "react-router-dom";
import store from "../../stores/mainStore";
import { observer } from "mobx-react-lite";

const FilmList = () => {

    const [collection, setCollection] = useState<FilmModel[]>()
    
    const filmStore = store.filmStore;
    const films = filmStore.filmCollection;

    
    const watched_films = films.filter(film => film.id in store.watchedfilms);
    const future_films = films.filter(film => film.id in store.futurefilms);

    useEffect(() => {
        if (filmStore.watched) {
            setCollection(watched_films);
        } else {
            setCollection(future_films);
        }
        
    }, [filmStore.watched]);

    

    if (collection) 
        return(
            <div className="films-list">
                {collection?.map(film => {
                    
                    return(
                        <Link to={`/film/${film.id}`}>
                            <div key={film.id} className="film">

                                <div className="film-poster" style={{backgroundImage: `url(${film.img})`} }>
                                    <div>
                                        <div className="rate_container">
                                            {film.rate}
                                        </div>
                                    </div>
                                </div>

                                <p className="film_name">{film.title}</p>
                            </div>
                        </Link>
                    );
                })}



        </div>
    ); else return (<p>Collection is empty</p>)
}

export default observer(FilmList);