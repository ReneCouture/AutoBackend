import { usePseudoData } from "./wishesConfig"
import { wishGetPseudos } from "./wishGetPseudos"
import { Wish } from "./Wish"

/*
	This returns the data from the server that we wish we would receive
	When usePseudoData is true, this will generate some made up data instead of going to a backend
*/
export async function wishGet(wish:Wish)
{
	if(usePseudoData)
	{
		return wishGetPseudos(wish)
	}
	else//otherwise, fetch the data from the generated backend
	{

	}
}