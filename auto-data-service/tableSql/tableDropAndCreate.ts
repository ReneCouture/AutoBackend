import { log } from "../Other/log"
import { performQuery } from "../Other/connectionPool"
import { Wish } from "../Wish/Wish"
import { wishGetSqlColumns } from "../Wish/wishGetSqlColumns"

/*
	Drops the table associated with the wish.
	wishes will translate directly to tables for now.
	there may be other calculations between the tables and wishes in the future.

	returns 1 on success
*/
export async function tableDrop(wish:Wish)
{
	//we need to keep sql injection in mind
	let queDrop=`drop table if exists ${wish.name};`

	log(`queDrop=${queDrop}`)

	return await performQuery(queDrop)
}

export async function tableCreate(wish:Wish)
{
	let queCreate=`create table ${wish.name}`

	let queColumns=wishGetSqlColumns(wish)

	let queAll=`${queCreate} ${queColumns};`

	log(`queAll=${queAll}`)

	return await performQuery(queAll)
}