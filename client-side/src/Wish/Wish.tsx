
/*
	We can define how the system works from here
*/

import { DataPlaceholder, dataPlacerHolderGetPseudo } from "../DataPlaceholder";

//T we want auto-backend to generate pretend data. 
//F we want data from the server
export const usePseudoData=true 
export const pseudoEntries=8	//how many fake rows do we generate? must be 1 or more

//all the wishes will be stored here so the backend may be generated from them
export let allTheWishes:Wish[]=[]

/*
	This defines the data we wish the server would give us. 
	The backend will be generated from the data we wish it would give us. 
	This will eliminate a lot of time spent writing and configuring a data backend. 
*/
export class Wish
{
	name:string="";
	dataWeWant:any;//the objects we want from the backend { }

	// constructor(name:string,json:any)
	// {
	// 	allTheWishes.push(this)
	// 	this.dataWeWant=json
	// 	this.name=name
	// }
}

/*
	Returns a new wish. This is not using the constructor because it push itself onto the allTheWishes array
*/
export function wishCreate(wishName:string,json:any)
{
	let wish=new Wish()
	allTheWishes.push(wish)
	wish.name=wishName
	wish.dataWeWant=json
	return wish
}