import "./slider.sass";
import {useContext, useEffect, useState} from "react";
import filmsIcon from "../../content/svg/listIcon.svg";


import { observer } from "mobx-react-lite";
import store from "../../stores/mainStore";

const Slider = () => {

    const filmStore = store.filmStore;

    const [isDisabled, setDisable] = useState(true);

    const switchMode = () => {
        setDisable(!isDisabled);
    }

    useEffect(() => {
        if (isDisabled){
            store.filmStore.watched = true;
        }else {
            store.filmStore.watched = false;
        }
    }, [isDisabled, store.filmStore.watched]);

    return(
        <div className="wrapper_of_slider_and_icon">
            <div className="slider_container">
                    <button onClick={switchMode} disabled={!isDisabled} className="slider-button">
                        Буду смотреть 
                    </button>
                    <button onClick={switchMode} disabled={isDisabled} className="slider-button">
                        Просмотрено
                    </button>
            </div>

            <a className="icon_change_view">
                <img src={filmsIcon}/>
            </a>
        </div>


    )
}

export default observer(Slider)