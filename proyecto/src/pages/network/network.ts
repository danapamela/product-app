import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Network } from 'ionic-native';

@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})


export class NetworkPage {

  constructor(public navCtrl: NavController, private platform: Platform) {

  }

  obtainNetworkConnection() {
    console.log("hello");

    // watch network for a disconnect
    let disconnectSubscription = Network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();


    // watch network for a connection
    let connectSubscription = Network.onConnect().subscribe(() => {
      console.log('network connected!');     
      // We just got a connection but we need to wait briefly
       // before we determine the connection type.  Might need to wait     
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (Network.connection === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

    // stop connect watch
    connectSubscription.unsubscribe();
  }

}