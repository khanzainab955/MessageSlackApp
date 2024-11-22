import express from 'express';
import { PORT } from './config/serverConfig.js';
const app= express ();
app.get("/ping",(req, res) =>{
    return res.status(Statuscode.ok).json({message:'pong'});

});
app.listen(PORT,()=>{
console.log(`server is running on  ${PORT}`);
}
); 