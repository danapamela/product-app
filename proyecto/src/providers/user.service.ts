import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../models/user";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

    private usersURI = 'http://138.68.0.83:7070/api/v1/user/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(`${this.usersURI}/list`)
            .map(response => response.json() as User[])
            .catch(this.handleError);
    }
    
      getUser(email:string):Observable<User> {
        const url = this.usersURI + "profile/"+ email;
        return this.http.get(url)
            .map(
                response => response.json() as User
                )
            .catch(this.handleError);
   }


     deleteUser(email:string):Observable<User> {
        const url = this.usersURI + "delete/"+ email;
        return this.http.delete(url)
            .map(
                response => response.json() 
                )
            .catch(this.handleError);
   }


    update(user: User): Observable<User> {
        const url = `${this.usersURI}/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .map(() => user)
            .catch(this.handleError);
    }
    
    updateUser(user: User): Observable<User> {
       const url = this.usersURI + "update/" + user.email;
        return this.http
            .put(url, JSON.stringify({"firstname":user.firstname, 
                                      "lastname":user.lastname, 
                                      "phone":user.phone}), 
                {headers: this.headers})
            .map(() => user)         
            .catch(this.handleError);

    }
    
    
        updatePass(user: User): Observable<User> {
       const url = this.usersURI + "update/" + user.email;
        return this.http
            .put(url, JSON.stringify({"password":user.password}), 
                {headers: this.headers})
            .map(() => user)         
            .catch(this.handleError);

    }

    create(name: string): Observable<User> {

        return this.http
            .post(this.usersURI, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); 
        return Observable.throw(error.message || error);
    }

    signUnUser(email:string,password:string): Observable<User> {
        return this.http
            .post(this.usersURI + "sign-in", JSON.stringify({"email": email,"password":password}), {headers: this.headers})
            .map(
                response => response.json() as User
                )
            .catch(this.handleError);
    }    
}