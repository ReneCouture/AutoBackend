import { log } from "../log"
import { tableColFromComp } from "./tableColFromComp"

/*
	Returns a table rows as sql created from a wish.

	wish is:
		{
        "wishName": "wish0",
        "comps": [
            {
                "name": "yourColumNameA",
                "type": "string"
            },
			 {
                "name": "yourColumNameB",
                "type": "decimal"
            }
        ]
    }

	returns sql columns:
		(yourColumName text,yourColumNameB decimal)
*/
export function tableColsFromWish(wish:any)
{
	log(`tableColsFromWish() has been reached`)

	if(!Array.isArray(wish.comps))	return ``
	if(wish.comps.length==0) 		return ``

	log(`wish.comps.length=`,wish.comps.length)

	if(wish.comps.length==1)		
	{
		let col=tableColFromComp(wish.comps[0])
		log(`col=`,col)
		return `(${col})`
	}

	let cols=`(${tableColFromComp(wish.comps[0])}`

	for(let i=1;i<wish.comps.length;i++)
	{
		cols=`${cols},${tableColFromComp(wish.comps[i])}`
	}

	return `${cols})`
}