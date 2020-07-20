

/*
	This defines the data we wish the server would send to the client

	This may end up being the exact same wish object in client-side and server-side.

	There are two classes called Wish, one here and one on the front end.
*/
export class Wish
{
	name:		string=""
	dataWeWant:	any=null	//the objects we want to send to the front-end { }
	comps:		Comp[]=[]	//the name-type pairs that might be turned into sql columns
}

/*
	This is a data model to hold a "name" and "type" pair. A Component of Wish
		{
			"name": "yourColumNameA",
			"type": "string"
		}
*/
export class Comp
{
	name:			string=""
	type:			string=""
}