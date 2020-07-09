(function() {
    var firebaseConfig = {
        apiKey: " AIzaSyDXzYBrzEiokZaFApZs14L5RxWuxx1TJdM ",
        authDomain: "fir-node-2027f.firebaseapp.com ",
        databaseURL: "https://fir-node-2027f.firebaseio.com ",
        projectId: "fir-node-2027f ",
        storageBucket: "fir-node-2027f.appspot.com ",
        messagingSenderId: "865807851567 ",
        appId: "1:865807851567:web:c89f316ba044c1b1d926da ",
        measurementId: "G-MLH8C669P0 "
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get elemnts from the DOM element
    const btnLogin = document.getElementById('btnLogin')
    const btnLogout = document.getElementById('btnLogOut')

    // Click event listeners
    btnLogin.addEventListener('click', e => {
        firebase.auth().signInAnonymously();
    });

    // auth listeners
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser)
    })

}());