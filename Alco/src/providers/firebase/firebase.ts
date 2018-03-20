import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase, public auth: AuthenticatieProvider) {}
  getUserProfile() {
    this.auth.getCurrentuserID().then(id => {
      var user = this.afd.object('/userProfile/'+id); console.log('Userprofile:' + user);
    });
  }
 
  addUser(email) {
    this.afd.list('/userProfile/').push(email);
  }
 
  removeUser(email) {
    this.afd.list('/userProfile/').remove(email);


  }

}
