import { log } from "./log"
import { response } from "express"


export async function logSend(rs: any, message:string)
{
	log(message)

	rs.status(401).send(message)
}