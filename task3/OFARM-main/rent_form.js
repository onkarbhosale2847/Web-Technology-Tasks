const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://jadhavpratik2112:<Dhbj*2g8itGa3z$>@demo.0vlocup.mongodb.net/Demo");
// mongoose.connect("mongodb+srv://jadhavpratik2112:<Dhbj*2g8itGa3z$>@demo.0vlocup.mongodb.net/JFarm", { useNewUrlParser: true }, { useUnifiedTopology: true });
mongoose.connect("mongodb+srv://jadhavpratik2112:Lonewolf_4@demo.0vlocup.mongodb.net/JFarm", { useNewUrlParser: true }, { useUnifiedTopology: true })

const notesSchema = {
    name: String,
    email: String,
    mobile: BigInt,
    product_name: String,
    product_desc: String,
    price_rent: BigInt,

    

}

const Note = mongoose.model("Note", notesSchema);

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/rent.html");
})

app.post("/", function (req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})



app.listen(5000, function() {
    console.log("Server running on 5000");
})


