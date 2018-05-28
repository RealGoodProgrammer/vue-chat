import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBB0IuyHK06tdG7uvVwuG5rzQcXFZDr5fs',
  authDomain: 'vuetify-firebase-application.firebaseapp.com',
  databaseURL: 'https://vuetify-firebase-application.firebaseio.com',
  projectId: 'vuetify-firebase-application',
  storageBucket: 'vuetify-firebase-application.appspot.com',
  messagingSenderId: '652103123324'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
