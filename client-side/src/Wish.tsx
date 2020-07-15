
/*
	We can define how the system works from here
*/

import { DataPlaceholder, dataPlacerHolderGetPseudo } from "./DataPlaceholder";

//T we want auto-backend to generate pretend data. 
//F we want data from the server
export const usePseudoData=true 
export const pseudoEntries=8	//how many fake rows do we generate? must be 1 or more

//all the wishes will be stored here so the backend may be generated from them
export let allTheWishes:Wish[]=[]

/*
	This defines the data we wish the server would give us
*/
export class Wish
{
	dataWeWant:any;//the objects we want from the backend { }

	// constructor(json:any)
	// {
	// 	allTheWishes.push(this)
	// 	this.dataWeWant=json
	// }
}

export function wishCreate(json:any)
{
	let thing=new Wish()
	let len=allTheWishes.push(thing)
	console.log(`wishCreate len=${len}`)
	thing.dataWeWant=json
	return thing
}

/*
	This returns the data from the server that we wish we would receive
*/
export function wishGet(wish:Wish)
{
	if(usePseudoData)
	{
		//This basically puts pseudo values in for the data we wish we could have
		let dataWereReturning:any=[]

		for(let i=0;i<Math.max(1,pseudoEntries);i++)//repeat several times
		{
			//convert the pseudo data objects to actual values for each property of the object
			let dataWithValuesPutIn=Object.assign({},wish.dataWeWant)//copy the object

			for(let prop in wish.dataWeWant)//loops over 'name' and 'color'
			{
				let pseudoObject:DataPlaceholder=wish.dataWeWant[prop]

				dataWithValuesPutIn[prop]=dataPlacerHolderGetPseudo(pseudoObject)
			}

			dataWereReturning.push(dataWithValuesPutIn)
		}

		return dataWereReturning
	}
	else//otherwise, fetch the data from the generated backend
	{

	}
}