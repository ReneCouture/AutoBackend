import { log } from "../log";
import { axiosClient } from "../axios";
import { allTheWishes } from "./Wish";

/*
	Generates the backend from all the defined wishes. 
	This hits the siteUrl/tablesDropAndGenerate endpoint for now.
	this sends all the wishes in the following form:
		{
			generateObjectName:"Fancy name with encryption stuff maybe"
			allTheWishes:[
				{
					"wishName": "wish_a",
					"comps": [
						{
							"name": "colum_x",
							"type": "string"
						},
						{
							"name": "colum_y",
							"type": "decimal"
						}
					]
				}
			]
		}

	dataWeWant which is defined as the components we want from the server:
		{
			yourDataNameA:	pseudoDataObject,
			yourDataNameB:	pseudoDataObject,
			yourDataNameC:	pseudoDataObject,
		}
*/
export async function wishGenerateAll()
{
	log(`wishGenerateAll() has been reached`)

	//create the correctly formatted wishes to put into the request
	let requestWishes=allTheWishes.map((wish:any)=>
	{
		return{
			wishName:wish.name,
			comps:compsFromDataWeWant(wish.dataWeWant)
		}
	})

	//create the generate request
	let request={
		generateObjectName:"Fancy name with encryption stuff maybe",
		allTheWishes:requestWishes
	}

	log(`request=`,request)

	axiosClient.post('/tablesDropAndGenerate',request)
}

/*
	Returns a component from the data object dataWeWant
	dataWeWant is:
		{
			yourDataNameA:	pseudoDataObject,
			yourDataNameB:	pseudoDataObject,
		}

	component is:
		[
			{
				name:yourDataNameA,
				type:string
			},
			{
				name:yourDataNameB,
				type:integer
			},
		]

*/
function compsFromDataWeWant(dataWeWant:any)
{
	log(`compsFromDataWeWant() has been reached`)
	//log(`dataWeWant=`,dataWeWant)

	let data:any[]=[]

	//convert the json keys to the request format
	//not sure i'm happy with this style
	for(let k in dataWeWant)
	{
		data.push({
			name:k,
			type:dataWeWant[k].dataType,
		})
	}

	return data
}