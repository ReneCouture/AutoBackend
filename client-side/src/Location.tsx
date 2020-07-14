
//Not sure we'll need this model or not

export class Location
{
	state:string;
	zip:number;

	constructor()
	{
		this.state=""
		this.zip=0
	}

	gimmePseudo()
	{
		return "VT"//,"TX","FL","CA","SC","AL","HI"
	}
}