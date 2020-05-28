var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyA-3Kv5f6-YnMkE-jmmSqeOicjjShUhGB4",
    authDomain: "react-app-143.firebaseapp.com",
    databaseURL: "https://react-app-143.firebaseio.com"
});
var base = Rebase.createClass(app.database());

export default base
