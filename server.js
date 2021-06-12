const express = require("express")

const app = express();



const port = process.env.PORT || 5000;
console.log(port);
app.listen(port, () => console.log(`Server is running on http://127.0.0.1:${port}`));
