const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.get("/", (req, res) =>{
    res.send("<H1>hello good day</H1>");

} );
app.listen(PORT, () => console.log(`app is ruuning on port ${PORT}`));
