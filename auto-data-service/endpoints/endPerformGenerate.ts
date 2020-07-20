import { app } from ".."
import { Request,Response } from "express";
import { log } from "../Other/log";
import { logSend } from "../Other/logSend";
import { tableDrop, tableCreate } from "../tableSql/tableDropAndCreate";
import { Wish } from "../Wish/Wish";
import { tableInsertPseudo } from "../tableSql/tableInsertPseudo";

/*
	This endpoint receives a generate request. 
	It will generate the backend based on that request. 
	When development of the backend is complete, this endpoint may be removed.
*/
export function endPerformGenerate()
{
	app.post(`/performGenerate`,async(rq:Request,rs:Response)=>
	{
		log(`Post /performGenerate has been reached`)

		try
		{
			//log(`incoming request=`,rq)
			//console.log(`incoming request=${rq}`)
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
			allTheWishes.map(async(wish:Wish)=>{
				if(rq.body.tablesDrop)				await tableDrop(wish)
				if(rq.body.tablesCreate)			await tableCreate(wish)
			})

			rs.status(200).send(`Tables have been dropped and re-generated`)
		}
		catch(e)
		{
			rs.status(401).send(`Issue ${e.message}`)
		}
	})
}