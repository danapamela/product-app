import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class ProductProvider {

  db: SQLite;
  constructor() {
  	this.db = new SQLite();
  }

  openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    });
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS product(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'name TEXT, ' +
        'type TEXT, ' +
        'price INTEGER ' +
        'quantity INTEGER) ';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let query = 'SELECT * FROM product;';
    return this.db.executeSql(query, [])
      .then(response => {
        let products = [];
        for (let index = 0; index < response.rows.length; index++) {
          products.push(response.rows.item(index));
        }
        return Promise.resolve(products);
      })
  }

  create(product: any){
    let query = 'INSERT INTO product(name, type, price, quantity) VALUES(?, ?, ?, ?)';
    return this.db.executeSql(query, [product.name, product.type, product.price, product.quantity]);
  }

  update(product: any){
    let query = 'UPDATE product SET name=?, type=?, price=?, quantity=? WHERE id=?';
    return this.db.executeSql(query, [product.name, product.type, product.price, product.quantity, product.id]);
  }

}
