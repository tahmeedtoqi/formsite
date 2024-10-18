import express from "express";

const app = express();
const port = 3000;
const items = [];
const workItems = [];
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
        items: items
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
        workItems: workItems
    });
});

app.post("/", (req, res)=>{
    const newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
    
});

app.post("/work", (req, res)=>{
    const newItem = req.body.newItem;
    workItems.push(newItem);
    res.redirect("/work");
    
});


app.listen(port, ()=>{
    console.log("LISTENING TO..." + port);
})