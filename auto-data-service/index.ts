import express from 'express';
import bodyparser from 'body-parser'
import { Request,Response } from "express";
import { performQuery } from './Connections/connectionPool';
import { endTablesDropAndGenerate } from './endTablesDropAndGenerate';
import { log } from './log';
import { corsFilter } from './Connections/corsFilter';

export const app=express();

app.use(bodyparser.json())	//convert the request to JSON
app.use(corsFilter)			//very unsecure cors stuff. I use this to test locally

endTablesDropAndGenerate()

app.get(``,async(rq:Request,rs:Response)=>
{
	rs.send(`Auto-data-service is running.<br/>Setting up environment variables for a database may be the next thing to deal with.`)
})

app.listen(3008,()=>{
    console.log(`Auto-data-service has started. listening on port 3008. Here we go!`)
})