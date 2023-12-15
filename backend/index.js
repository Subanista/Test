import Express  from "express";
import cors from"cors"


const app = Express();
app.use(cors());

app.get("/getData",(req,res)=>{
    res.send("backend is connected with frontend successfully")
})
app.listen(5000,()=>{ console.log('app is running')});