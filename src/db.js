import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBc6A2ivdNvKguJ_gUsy4CWpgXCnHhd5oI",
    authDomain: "the-watcher-vuefire.firebaseapp.com",
    databaseURL: "https://the-watcher-vuefire.firebaseio.com",
    projectId: "the-watcher-vuefire",
    storageBucket: "the-watcher-vuefire.appspot.com",
    messagingSenderId: "500934923424"
  };

  const firebaseApp = firebase.initializeApp(config)

  const db = firebaseApp.database()

  export default db
  