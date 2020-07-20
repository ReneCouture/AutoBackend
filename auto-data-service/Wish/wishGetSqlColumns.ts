import { log } from "../Other/log"
import { tableColFromComp } from "../tableSql/tableColFromComp"
import { Wish } from "./Wish"

/*
	Returns table rows as sql created from a wish.

	wish is:
		{
			"name": "wish0",
			"comps": [
				{
					"name": "yourColumNameA",
					"type": "text"
				},
				{
					"name": "yourColumNameB",
					"type": "decimal"
				}
			]
		}

	returns sql columns:
		(yourColumNameA text,yourColumNameB decimal)
*/
export function wishGetSqlColumns(wish:Wish)
{
	//log(`wishGetSqlColumns() has been reached`)

	if(!Array.isArray(wish.comps))	return ``
	if(wish.comps.length==0) 		return ``

	//log(`wish.comps.length=`,wish.comps.length)

	if(wish.comps.length==1)		
	{
		let col=tableColFromComp(wish.comps[0])
		//log(`col=`,col)
		return `(${col})`//return one column (yourColumNameA text)
	}

	//return many columns with commas between each one
	let cols=`(${tableColFromComp(wish.comps[0])}`

	for(let i=1;i<wish.comps.length;i++)
	{
		//keep concatinating columns together including commas
		cols=`${cols},${tableColFromComp(wish.comps[i])}`
	}

	return `${cols})`
}