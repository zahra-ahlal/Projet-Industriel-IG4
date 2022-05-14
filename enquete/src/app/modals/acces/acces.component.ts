import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css']
})
export class AccesComponent implements OnInit {

  user : Observable<any>;
  email :string;
  emailSent : boolean = false;

  errorMessage : string;
  userService: UserService;
 

  constructor(public authService: AuthService, public afAuth: AngularFireAuth, public router: Router) { 
  }

  ngOnInit(): void {
    this.user = this.afAuth.authState;
    console.log("USer : " + this.user)


    const url = this.router.url;
    console.log("URL : " + url)
    console.log("Email : " + this.email)
    //console.log()//,this.listeIngredientsFinal)



    //this.confirmSignIn(url);

  }

  async sendEmailLink(em){
    console.log("SEND EMAIL LINK"+this.email)
    const actionCodeSettings = {
      //The redirect URL
      url: 'http://localhost:4200/info-administratives',
      handleCodeInApp: true
    };

    try {
      await this.afAuth.sendSignInLinkToEmail(this.email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', this.email);
      this.emailSent = true;
      console.log("USER : " + this.user)


    } catch (err) {
      this.errorMessage = err.message;
      console.log("qlqch va pas")
    }
  }

  getALLUser(){
    return this.userService.getAllUsers()
  }


  /*async confirmSignIn(url) {
    console.log("CONFIRM SIGN IN "+this.email)
    try {
      if(this.afAuth.isSignInWithEmailLink(url)){
        let email = window.localStorage.getItem('emailForSignIn');

        //if missing email, prompt user for it 
        if (!email){
          email = window.prompt('Please provide your email for confirmation');
        }

      // Signin user and remove the email localStorage
      const result = await this.afAuth.signInWithEmailLink(email, url);
      window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      this.errorMessage = err.message;
      
      
    }
  }*/

  

}
