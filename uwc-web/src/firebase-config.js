const firebaseConfig = {
    apiKey: "AIzaSyAKWqzTQA3IJYYzT0KTCw7VG1-3B_gr4Oo",
    authDomain: "urban-waste-collection.firebaseapp.com",
    projectId: "urban-waste-collection",
    storageBucket: "urban-waste-collection.appspot.com",
    messagingSenderId: "91896626010",
    appId: "1:91896626010:web:cac2a93d7c2c00cc465163"
  };

  export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error(
        "No Firebase configuration object provided." +
          "\n" +
          "Add your web app's configuration object to firebase-config.js"
      );
    } else {
      return config;
    }
  }