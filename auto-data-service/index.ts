import express from 'express';
import bodyparser from 'body-parser'
import { Request,Response } from "express";
import { performQuery } from './connectionPool';
import { endTablesDropAndGenerate } from './endTablesDropAndGenerate';
import { log } from './log';

export const app=express();

app.use(bodyparser.json())//convert the request to JSON

endTablesDropAndGenerate()

app.get(``,async(rq:Request,rs:Response)=>
{
	rs.send(`Auto-data-service is running.<br/>Setting up environment variables for a database may be the next thing to deal with.`)
})

app.listen(3008,()=>{
    console.log(`Express is back has started. listening port 3008. Here we go!`)
})