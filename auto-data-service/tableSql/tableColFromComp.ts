import { log } from "../log"

/*
	Returns a name and type pair to use in a sql create table query.
	comp is a component inside a wish:
		{
			"name": "yourColumnName",
			"type": "string"
		}

	returns a column as sql text:
		yourColumnName text
*/
export function tableColFromComp(comp:any)
{
	if(comp==null)					return ``
	if(typeof(comp)!='object') 		return ``
	if(typeof(comp.name)!='string')	return ``

	switch(comp.type)
	{
		case 'text': 	return `${comp.name} text`
		case 'string': 	return `${comp.name} text`
		case 'int': 	return `${comp.name} integer`
		case 'integer': return `${comp.name} integer`
		case 'number': 	return `${comp.name} decimal`
		case 'decimal': return `${comp.name} decimal`
	}

	log(`Column type not found. comp.type=${comp.type}`)

	return ``
}