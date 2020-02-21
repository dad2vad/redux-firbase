import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import { reactReduxFirebase } from 'react-redux-firebase'
import * as firebase from 'firebase'

const fbConfig = {
  "apiKey":"AIzaSyDBo5gJ7GkaztJYpVTJEUmgPQMJU5N_eo8",
  "authDomain":"grob0t-628ae.firebaseapp.com",
  "databaseURL":"https://grob0t-628ae.firebaseio.com",
  "projectId":"grob0t",
  "storageBucket":"grob0t.appspot.com",
  "messagingSenderId":"767266837467",
  "appId":"1:767266837467:web:69735ae17ab6a14a0f8dfe",
  "measurementId":"G-KTMXYYFRQ7"
}

try {
  firebase.initializeApp(fbConfig)
} catch(err) {}

export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase,
      {
        userProfile: 'users'
      }
    ),
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)

  return store
}
