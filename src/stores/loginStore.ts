import {makeAutoObservable, observable} from 'mobx';
import UserModel from "../types/userType";

export class UserStore {
    users: Array<UserModel> = [
        {
            email: "gerich@gmail.com",
            password: "123123",
            id: 1
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }
 
    checkUser(email: string, password: string) {
        return this.users.find((user => user.email === email && user.password === password));
    }

    checkUserByEmail(email: string) {
        return this.users.find((user => user.email === email));
    }

}

export default new UserStore();