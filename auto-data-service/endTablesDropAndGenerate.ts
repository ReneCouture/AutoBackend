import { app } from "."
import { performQuery } from "./connectionPool"
import { Request,Response } from "express";
import { log } from "./log";
import { logSend } from "./logSend";
import { tableDropAndCreate } from "./tableSql/tableDropAndCreate";

export function endTablesDropAndGenerate()
{
	app.post(`/tablesDropAndGenerate`,async(rq:Request,rs:Response)=>
	{
		log(`Post /tablesDropAndGenerate has been reached`)

		try
		{
			log(`incoming json=`,rq.body)

			if(!Array.isArray(rq.body))
			{
				await logSend(rs,`Please provide an array of objects to generate the tables from. The type was ${typeof rq.body}`)
				return
			}

			rq.body.map(async(wish:any)=>{
				await tableDropAndCreate(wish)
			})

			rs.status(200).send(`Tables have been dropped and re-generated`)
		}
		catch(e)
		{
			rs.status(401).send(`Issue ${e.message}`)
		}
	})
}