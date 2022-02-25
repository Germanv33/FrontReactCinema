import {makeAutoObservable, makeObservable, observable} from 'mobx';
import {FilmModel} from "../types/filmType";
import Minary from "../content/film_img/Minary.jpg"
import Sun from "../content/film_img/Sun.jpg"
import Mank from "../content/film_img/Mank.jpg"
import Girl from "../content/film_img/Girl.jpg"
class FilmStore{

    watched: boolean = true;
    
    filmCollection: Array<FilmModel> = [
        {
            id: 1,
            title: 'Минари',
            rate: 6.9,
            img: Minary,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: ['Фантастика']
        },
        {
            id: 2,
            title: 'Солнцестояние',
            rate: 6.6,
            img: Sun,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: ['Фантастика']
        },
        {
            id: 3,
            title: 'Манк',
            rate: 7.1,
            img: Mank,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: ['Фантастика']
        },
        {
            id: 4,
            title: 'Девушка пода...',
            rate: 6.8,
            img: Girl,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: ['Фантастика']
        },
        {
            id: 5,
            title: 'Минари- 2',
            rate: 6.9,
            img: Minary,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: ['Фантастика']
        }
    ]

    constructor() {
        makeAutoObservable(this);
    }
}

export default FilmStore;
