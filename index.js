// express
const express = require('express')
const app = express();
const port = 3000;
// Git Constants
const GITHUB_CLIENT_ID

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});