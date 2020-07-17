import { log } from "../log"
import { performQuery } from "../connectionPool"
import { tableColsFromWish } from "./tableColsFromWish"

/*
	Drops the table and re-creates it from a wish.
	wishes will translate directly to tables for now.
	there may be other calculations between the tables and wishes in the future.

	returns 1 on success
*/
export async function tableDropAndCreate(wish:any)
{
	//we need to keep sql injection in mind
	let genTableName=wish.wishName

	let queDrop=`drop table if exists ${genTableName};`

	let queCreate=`create table ${genTableName}`

	let queColumns=tableColsFromWish(wish)

	let queAll=`${queDrop} ${queCreate} ${queColumns};`

	log(`queAll=${queAll}`)

	return await performQuery(queAll)
}

