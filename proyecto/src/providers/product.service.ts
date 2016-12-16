import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Product} from "../models/product";

/*
  Generated class for the Product provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {

  private productsURI = 'http://138.68.0.83:7070/api/v1/product';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {}
 
  getProduct(id:number):Observable<Product> {
        const url = this.productsURI + "/detail/"+ id;
        return this.http.get(url)
            .map(
                response => response.json() as Product
                )
            .catch(this.handleError);
   }

  getProducts(): Observable<Product[]> {
      return this.http.get(this.productsURI + "/list")
          .map(
              response => response.json() as Product[]
              )
          .catch(this.handleError);
  }

  create(product: Product): Observable<Product> {
        var param = JSON.stringify(product);
        var url = this.productsURI +"/create";
        return this.http
            .post(url,param, {headers: this.headers})
            .map(
                res => res.json()
                )
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.productsURI + "/update"}/${product.id}`;
        return this.http
            .put(
                url, 
                JSON.stringify(product), 
                {headers: this.headers})
            .map(
                () => product
                )
            .catch(this.handleError);
    }

    delete(id:number): Observable<Product> {
        const url =  `${this.productsURI + "/delete"}/${id}`;
        return this.http.delete(url)
            .map(
                () => {}
                )
            .catch(this.handleError);
    }

    

  private handleError(error: any): Observable<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Observable.throw(error.message || error);
  }
}