import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBDE84OLeoBsp3YG9iHBRmMHe1UmJlVWp0",
    authDomain: "foodfirebase-59c31.firebaseapp.com",
    projectId: "foodfirebase-59c31",
    storageBucket: "foodfirebase-59c31.appspot.com",
    messagingSenderId: "673708489235",
    appId: "1:673708489235:web:0ca4db180e38ae7b0a5de6"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.firestore()
        this.storage = app.storage()
    }

    // INSCRIPTION
    signupUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)
    

    // CONNEXION
    loginUser = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password)
    

    // DECONNEXION
    signoutUser = () => this.auth.signOut()

    // RÉCUPÉRER LE MOT DE PASSE
    passwordReset = email => this.auth.sendPasswordResetEmail(email)

    // BASE DE DONNÉES FIRESTORE
    user = uid => this.db.doc(`users/${uid}`);

    // GESTION DES MENUS
    queryMenu = () => this.db.collection("menu")
    queryMenus = () => this.queryMenu().orderBy('position','desc');
    queryOneMenu = (id) => this.queryMenu().doc(id);

   
    // GESTION DES PRODUITS
    queryProduit = () => this.db.collection("produits");
    queryProduits = () => this.queryProduit().orderBy('price','desc')
    queryOneProduit = (id) => this.queryProduit().doc(id)
    
}

export default Firebase