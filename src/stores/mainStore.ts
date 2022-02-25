import {makeAutoObservable, observable} from "mobx";
import {UserStore } from "./loginStore";
import FilmStore from "./filmStore";

class MainStore {
    userStore: UserStore;
    filmStore: FilmStore;

    @observable watchedfilms:Array<Number> = [1,2,5,23]
    @observable futurefilms:Array<Number> = [1,2,3,4,5,11]

    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore();
        this.filmStore = new FilmStore();
    }
}

const store = new MainStore();
export default store;