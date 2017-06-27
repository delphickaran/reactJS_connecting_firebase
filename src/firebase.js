import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
        apiKey: "AIzaSyBHJDCsTN0jos-9KuF5i90a-ieti5k17UM",
        authDomain: "socialstudy-2da04.firebaseapp.com",
        databaseURL: "https://socialstudy-2da04.firebaseio.com",
        projectId: "socialstudy-2da04",
        storageBucket: "socialstudy-2da04.appspot.com",
        messagingSenderId: "240866230002"
      };
      firebase.initializeApp(config);
      database = firebase.database()
    }
export const addSection = (name) => {
return database.ref('subjects').set(name)
}

export const getSectionsDB = () => {
  return database.ref('subjects').once('value').then(function(snapshot) {
        return snapshot.val();   
    });
}