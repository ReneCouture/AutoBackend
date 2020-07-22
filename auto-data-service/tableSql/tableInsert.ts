import { Wish } from "../Wish/Wish";
import { log } from "../Other/log";

/*
	Inserts the pseudo value for every component inside the wish
*/
export async function tableInsert(wish:Wish,data:any)
{
	log(`tableInsert() has been reached`)
	log(`wish=`,wish)
	log(`data=`,data)
}