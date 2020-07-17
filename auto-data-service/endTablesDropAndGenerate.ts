import { app } from "."
import { performQuery } from "./Connections/connectionPool"
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
			//log(`incoming request=`,rq)
			console.log(`incoming request=${rq}`)
			log(`incoming json=`,rq.body)
			log(`generateObjectName=`,rq.body.generateObjectName)

			let allTheWishes=rq.body.allTheWishes
			log(`allTheWishes=`,allTheWishes)

			if(!Array.isArray(allTheWishes))
			{
				await logSend(rs,`Please provide an array of objects to generate the tables from. The type was ${typeof rq.body}`)
				return
			}

			//For now, create tables directly from wishes
			//wishes may be different from tables in the future after optimizations are performed
			allTheWishes.map(async(wish:any)=>{
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