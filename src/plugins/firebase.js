import Vue from 'vue'

import { firestorePlugin } from 'vuefire'



import firebase from 'firebase/app'

import 'firebase/firebase-auth'

import 'firebase/firestore'



Vue.use(firestorePlugin)



import * as firebaseui from 'firebaseui'



const firebaseConfig = {
 
    apiKey: "AIzaSyD4JrnK_QXA7n1LfBfGOXRUKI2HC78s6II",
    authDomain: "muchoshop-bdc5d.firebaseapp.com",
    databaseURL: "https://muchoshop-bdc5d.firebaseio.com",
    projectId: "muchoshop-bdc5d",
    storageBucket: "muchoshop-bdc5d.appspot.com",
    messagingSenderId: "58649897960",
    appId: "1:58649897960:web:a3f7c386ff047d8aad125d"
  };





firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())



Vue.prototype.$firebase = firebase

Vue.prototype.$firebaseui = ui



export const db = firebase.firestore()