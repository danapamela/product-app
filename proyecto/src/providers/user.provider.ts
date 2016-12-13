import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class UserProvider {

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
    let sql = 'CREATE TABLE IF NOT EXISTS user(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'email TEXT, ' +
        'password TEXT, ' +
        'firstname TEXT ' +
        'lastname TEXT ' +
        'phone TEXT') ;
    return this.db.executeSql(sql, []);

  
  }

  getAll(){
    let query = 'SELECT * FROM user;';
    return this.db.executeSql(query, [])
      .then(response => {
        let users = [];
        for (let index = 0; index < response.rows.length; index++) {
          users.push(response.rows.item(index));
        }
        return Promise.resolve(users);
      })
      
  }

  create(user: any){
    let query = 'INSERT INTO user(email, password, firstname, lastname, phone) VALUES(?, ?, ?, ?, ?)';
    return this.db.executeSql(query, [user.email, user.password, user.firstname, user.lastname, user.phone]);
  }

  update(user: any){
    let query = 'UPDATE user SET email=?, password=?, firstname=?, lastname=?, phone=? WHERE id=?';
    return this.db.executeSql(query, [user.email, user.password, user.firstname, user.lastname, user.phone, user.id]);
  }

}
