import Ember from 'ember';
import firebase from 'npm:firebase';

export default Ember.Service.extend({
    firebase: null,
    init() {
        firebase.initializeApp({
          apiKey: 'AIzaSyDSvv-wjk_IN7YENJnd2k-fnRgHMNy8Hww',
          authDomain: 'bighugs-62556.firebaseapp.com',
          databaseURL: 'https://bighugs-62556.firebaseio.com',
          storageBucket: 'bighugs-62556.appspot.com',
          messagingSenderId: '45208731668'
        });
        this.firebase = firebase;
    }
});
