

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