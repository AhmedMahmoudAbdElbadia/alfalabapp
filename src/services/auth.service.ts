import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(email:string , password :string) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(email,
			password);
	}
signUpWithEmail(email:string , password :string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,
		password)
	
}
resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

}