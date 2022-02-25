import React, {useContext, useEffect, useState} from 'react';
import "./collectionStyle.sass";
import TopHeader from "../../components/header/header"
import Slider from "../../components/collection/slider"
import FilmList from "../../components/collection/FilmList";
import store from '../../stores/mainStore';
import { observer } from 'mobx-react-lite';

const Collection = () => {

    var ministring = ''

    useEffect(() => {
        if (store.filmStore.watched) {
            ministring = String(store.filmStore.watched);
        } else {
            ministring = String(store.filmStore.watched);
        }
        
    }, [store.filmStore.watched]);

   return(
       <main className='full_container'>
        <TopHeader/>
        <div className="main_container">
            
            <h1 className="title">
                Коллекция 
            </h1>
                
                <Slider/>
                <FilmList/>
        </div>
       </main>
   )

}

export default observer(Collection);