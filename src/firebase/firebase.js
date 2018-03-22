import * as firebase from 'firebase';

const prodConfig = {
 	apiKey: "AIzaSyBiqc8wuBbYnk7qc6Ic7wKO9DPKr0tehjw",
  authDomain: "the-bible-app-4d6dd.firebaseapp.com",
  databaseURL: "https://the-bible-app-4d6dd.firebaseio.com",
  projectId: "the-bible-app-4d6dd",
  storageBucket: "the-bible-app-4d6dd.appspot.com",
  messagingSenderId: "334441268031"
};

const devConfig = {
  apiKey: "AIzaSyBiqc8wuBbYnk7qc6Ic7wKO9DPKr0tehjw",
  authDomain: "the-bible-app-4d6dd.firebaseapp.com",
  databaseURL: "https://the-bible-app-4d6dd.firebaseio.com",
  projectId: "the-bible-app-4d6dd",
  storageBucket: "the-bible-app-4d6dd.appspot.com",
  messagingSenderId: "334441268031"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};