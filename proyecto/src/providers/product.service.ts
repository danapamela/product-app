import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070 ';
    private headers = new Headers({
                                    'Content-Type': 'application/json', 
                                    'Origin': 'http://138.68.0.83:7070'
                                    });

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(`${this.productsURI}/api/v1/product/list`)
            .map(response => response.json() as Product[])
            .catch(this.handleError);
    }

    getProduct(product: Product): Observable<Product> {
        const url = `${this.productsURI}//api/v1/product/detail/${product.id}`;
        return this.http.get(`${this.productsURI}/api/v1/product/list`)
            .map(response => response.json() as Product)
            .catch(this.handleError);
    }    

    update(product: Product): Observable<Product> {
        const url = `${this.productsURI}//api/v1/product/update/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .map(() => product)
            .catch(this.handleError);
    }

    delete(product: Product): Observable<Product> {
        const url = `${this.productsURI}//api/v1/product/delete/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .map(() => product)
            .catch(this.handleError);
    }

    create(name: string): Observable<Product> {

        return this.http
            .post(`${this.productsURI}/api/v1/product/create`, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}