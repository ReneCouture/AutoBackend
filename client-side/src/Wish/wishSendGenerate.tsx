import { log } from "../Other/log";
import { axiosClient } from "../Other/axios";
import { allTheWishes } from "./wishesConfig";

/*
	Generates the backend from all the defined wishes. 
	This hits the siteUrl/performGenerate endpoint for now.
	this sends all the wishes in the following form:
		{
			generateObjectName:"Fancy name with encryption stuff maybe"
			tablesDrop:true,
			tablesCreate:true,
			tablesHavePseudoData:true,
			allTheWishes:[
				{
					"name": "wish_a",
					"comps": [
						{
							"name": 		"colum_x",
							"type": 		"string",
						},
						{
							"name": 		"colum_y",
							"type": 		"decimal",
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
export async function wishSendGenerate()
{
	log(`wishSendGenerate() has been reached`)

	//create the correctly formatted wishes to put into the request
	let requestWishes=allTheWishes.map((wish:any)=>
	{
		return{
			name:wish.name,
			comps:dataWeWantToComps(wish.dataWeWant)
		}
	})

	//create the generate request
	let request={
		generateObjectName:"Fancy name with encryption stuff maybe",
		tablesDrop:true,
		tablesCreate:true,
		tablesHavePseudoData:true,
		allTheWishes:requestWishes
	}

	log(`request=`,request)

	axiosClient.post('/performGenerate',request)
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
				name:			yourDataNameA,
				type:			string,
			},
			{
				name:			yourDataNameB,
				type:			integer,
			},
		]

*/
function dataWeWantToComps(dataWeWant:any)
{
	log(`dataWeWantToComps() has been reached`)
	//log(`dataWeWant=`,dataWeWant)

	let data:any[]=[]

	//convert the json keys to the request format
	//not sure i'm happy with this style
	for(let k in dataWeWant)
	{
		let comp=dataWeWant[k]//wish component

		data.push({
			name:			k,
			type:			comp.dataType,
		})
	}

	return data
}