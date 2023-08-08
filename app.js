let express = require('express')

let app = express();
const port = 4000
const path = require("path")
app.use(express.static("public"));

app.listen(port, () => console.log("Servidor corriendo en el puerto" + " " + port));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
    

