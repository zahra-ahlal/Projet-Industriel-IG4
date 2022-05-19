// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCYz7La_XbWymYCaF8gl6LHEaoMHgiysds",
    authDomain: "enquete-107a6.firebaseapp.com",
    projectId: "enquete-107a6",
    storageBucket: "enquete-107a6.appspot.com",
    messagingSenderId: "116448657503",
    appId: "1:116448657503:web:d283eb977440f027cddbea"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.




// Initialize Firebase
//const app = initializeApp(firebaseConfig);