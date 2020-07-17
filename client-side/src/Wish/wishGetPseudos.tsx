import { Wish, pseudoEntries } from "./Wish"
import { DataPlaceholder, dataPlacerHolderGetPseudo } from "../DataPlaceholder"

/*
	wishGetPseudos(wish)

	returns an array of pseudo data based on the data we wish we could receive from the backend. 
	this is nice for generating pseudo data and mocking up a site without even touching a backend.
*/
export function wishGetPseudos(wish:Wish)
{
	//This basically puts pseudo values in for the data we wish we could have
	let dataPseudo:any=[]

	for(let i=0;i<Math.max(1,pseudoEntries);i++)//make several pseudo entries
	{
		//convert the pseudo data objects to actual values for each property of the dataWeWant
		let dataWithValuesPutIn=Object.assign({},wish.dataWeWant)//new instance of data we want

		for(let prop in wish.dataWeWant)//loops over 'age' and 'color' variables/keys for example
		{
			let pseudoObject:DataPlaceholder=wish.dataWeWant[prop]

			dataWithValuesPutIn[prop]=dataPlacerHolderGetPseudo(pseudoObject)
		}

		dataPseudo.push(dataWithValuesPutIn)
	}

	return dataPseudo
}