import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { User } from "../models/user";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {


    private usersURI = 'http://138.68.0.83:7070/api/v1/';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(`${this.usersURI}/list`)
            .map(response => response.json() as User[])
            .catch(this.handleError);
    }

    getUser(email: string): Observable<User> {
        const url = this.usersURI + "profile/" + email;
        return this.http.get(url)
            .map(
            response => response.json() as User
            )
            .catch(this.handleError);
    }


    deleteUser(email: string): Observable<User> {
        const url = this.usersURI + "delete/" + email;
        return this.http.delete(url)
            .map(
            response => response.json()
            )
            .catch(this.handleError);
    }


    signIn(user: User): Observable<User> {
        return this.http
<<<<<<< HEAD
            .post(`${this.usersURI}user/sign-in`, JSON.stringify(user), { headers: this.headers })
=======
            .post(`${this.usersURI}/user/sign-in`, JSON.stringify(user), { headers: this.headers })
>>>>>>> bb891fd267b4c0ac11902a43f04c30b6904e0aeb
            .map(response => response.json() as User)
            .catch(this.handleError);
    }

    signUp(user: User): Observable<User> {
        return this.http
<<<<<<< HEAD
            .post(`${this.usersURI}user/sign-up`, JSON.stringify(user), { headers: this.headers })
=======
            .post(`${this.usersURI}/user/sign-up`, JSON.stringify(user), { headers: this.headers })
>>>>>>> bb891fd267b4c0ac11902a43f04c30b6904e0aeb
            .map(response => response.json() as User)
            .catch(this.handleError);
    }


    update(user: User): Observable<User> {
<<<<<<< HEAD
        const url = `${this.usersURI}${user.id}`;
=======
        const url = `${this.usersURI}/${user.id}`;
>>>>>>> bb891fd267b4c0ac11902a43f04c30b6904e0aeb
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .map(() => user)
            .catch(this.handleError);
    }
    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

}