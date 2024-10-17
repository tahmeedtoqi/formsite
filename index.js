import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res)=>{
    const today = new Date();
    const day = today.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[day];
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = today.toLocaleDateString('en-US', options); 
    let type = currentDay + " " + currentDate;
    res.render("index.ejs", {
        dayType: type,
    });
});

app.get("/work", (req, res)=>{

    const today = new Date();
    const day = today.getDay();

    let to = "Work list";
    if( day === 0 || day === 6){
        to = "Weekend list";

    }
    res.render("work.ejs", {
        todo: to,
    });
});

app.post("/", (req, res)=>{
    console.log(req.body);
});

app.post("/work", (req, res)=>{
    console.log(req.body);
    
});


app.listen(port, ()=>{
    console.log("LISTENING TO..." + port);
})