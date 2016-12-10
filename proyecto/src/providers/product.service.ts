import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { SQLite } from 'ionic-native';


@Injectable()
export class ProductService {

<<<<<<< HEAD
    db: SQLite;

    private productsURI = 'http://138.68.0.83:7070 ';
=======
    private productsURI = 'http://138.68.0.83:7070';
>>>>>>> 15059d19db7340a9438787edb9594036686a5a1b
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Origin': 'http://138.68.0.83:7070'
    });



    constructor(private http: Http) {
        this.db = new SQLite();
    }


    create(product: any) {
        let sql = 'INSERT INTO product(name) VALUES(?)';
        return this.db.executeSql(sql, [product.name]);
    }

    createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS product(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'name TEXT, ' +
        'type TEXT, ' +
        'quantity INTEGER, ' +
        'price TEXT)';
    return this.db.executeSql(sql, []);
  }

    delete(product: any) {
        let sql = 'DELETE FROM product WHERE id=?';
        return this.db.executeSql(sql, [product.id]);
    }

    getAll() {
        let sql = 'SELECT * FROM product';
        return this.db.executeSql(sql, [])
            .then(response => {
                let products = [];
                for (let index = 0; index < response.rows.length; index++) {
                    products.push(response.rows.item(index));
                }
                return Promise.resolve(products);
            })
    }

    openDatabase() {
        return this.db.openDatabase({
            name: 'data.db',
            location: 'default' 
        });
    }

    update(product: any) {
        let sql = 'UPDATE product SET name=?, completed=? WHERE id=?';
        return this.db.executeSql(sql, [product.name, product.id]);
    }



    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); 
        return Observable.throw(error.message || error);
    }
}