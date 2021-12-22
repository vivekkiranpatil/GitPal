import React from "react";


const CLIENT_ID = "135f7c899f448d47b853";
const REDIRECT_URI = "http://localhost:3000/";


function App() {
    return ( <
        a href = { `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}` } > Login < /a>
    );
}

export default App;