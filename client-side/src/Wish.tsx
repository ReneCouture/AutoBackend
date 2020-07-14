
/*
	We can define how the system works from here
*/

import { PseudoData, pseudoGimme } from "./PseudoData";

//T we want auto-backend to generate pretend data. 
//F we want data from the server
export const usePseudoData=true 
export const pseudoEntries=5	//how many fake rows do we generate? must be 1 or more

/*
	This defines the data we wish the server would give us
*/
export class Wish
{
	dataWeWant:any;//the objects we want from the backend { }

	constructor(json:any)
	{
		this.dataWeWant=json
	}
}

/*
	This returns the data from the server that we wish we would receive
*/
export function ask(wish:Wish)
{
	if(usePseudoData)
	{
		let dateWereReturning:any=[]

		for(let i=0;i<Math.max(1,pseudoEntries);i++)//repeat several times
		{
			//convert the pseudo data objects to actual values for each property of the object
			let dataWithValuesPutIn=Object.assign({},wish.dataWeWant)//copy the object

			for(let prop in wish.dataWeWant)//loops over name and color
			{
				let pseudoObject=wish.dataWeWant[prop]

				let madeUpValue=pseudoGimme(pseudoObject)

				dataWithValuesPutIn[prop]=madeUpValue
			}

			dateWereReturning.push(dataWithValuesPutIn)
		}

		return dateWereReturning
	}
	else//otherwise, fetch the data from the generated backend
	{

	}
}