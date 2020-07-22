import { app } from "..";
import { Request,Response } from "express";
import { log } from "../Other/log";
import { tableInsert } from "../tableSql/tableInsert";

/*
	Receives data that will be posted to the auto-backend. 
	This data may be transformed and then put into the database. 
*/
export async function endPostData()
{
	app.post('/postData',async(rq:Request,rs:Response)=>
	{
		log(`/postData has been reached`)

		try
		{
			log(`incoming json=`,rq.body)
			log(`wish=`,rq.body.wish)

			let arrayOfData=rq.body.arrayOfData
			log(`arrayOfData=`,arrayOfData)

			arrayOfData.map(async(wishData:any)=>{
				await tableInsert(rq.body.wish,wishData)
			})

			rs.status(200).send(`Data has been posted`)
		}
		catch(e)
		{
			rs.status(401).send(`Issue ${e.message}`)
		}
	})
}