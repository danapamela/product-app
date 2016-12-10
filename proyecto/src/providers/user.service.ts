import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

    private usersURI = 'http://138.68.0.83:7070';
    private headers = new Headers({
                                    'Content-Type': 'application/json', 
                                    });

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(`${this.usersURI}/api/v1/user/list`)
            .map(response => response.json() as User[])
            .catch(this.handleError);
    }

    getUser(user: User): Observable<User> {
        const url = `${this.usersURI}//api/v1/user/detail/${user.id}`;
        return this.http.get(`${this.usersURI}/api/v1/user/list`)
            .map(response => response.json() as User)
            .catch(this.handleError);
    }      

    signIn(user: User): Observable<User> {
        return this.http
            .post(`${this.usersURI}/api/v1/user/sign-in`, JSON.stringify(user), {headers: this.headers})
            .map(response => response.json())
            .catch(this.handleError);
    }

    signUp(user: User): Observable<User> {
        return this.http
            .post(`${this.usersURI}/api/v1/user/sign-up`, JSON.stringify(user), {headers: this.headers})
            .map(response => response.json())
            .catch(this.handleError);
    }    

    update(user: User): Observable<User> {
        const url = `${this.usersURI}//api/v1/user/update/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .map(() => user)
            .catch(this.handleError);
    }

    delete(user: User): Observable<User> {
        const url = `${this.usersURI}//api/v1/user/delete/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .map(() => user)
            .catch(this.handleError);
    }

    create(name: string): Observable<User> {

        return this.http
            .post(`${this.usersURI}/api/v1/user/create`, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}