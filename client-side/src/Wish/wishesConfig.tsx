

//The wish class/data model is the same on the front-end and back-end

import { Wish } from "./Wish"

/*
	We can define how the data we wish we could have system works from here
*/

//T we want auto-backend to generate pretend data. 
//F we want data from the server
export const usePseudoData=true 
export const pseudoEntries=4	//how many fake rows do we generate? must be 1 or more

//all the wishes will be stored here so the backend may be generated from them
export let allTheWishes:Wish[]=[]

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