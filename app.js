(function() {
    var firebaseConfig = {
        
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
