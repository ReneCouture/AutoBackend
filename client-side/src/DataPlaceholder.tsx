import { randomChoice } from "./Helpers/randomChoice"
import { type } from "os"

/*
	This class will act as a placeholder for the actual value of a variable.
	It can then plug in pseudo values or actual data from a backend.
*/
export class DataPlaceholder
{
	pseudoType='RANDOM'			//the type of generation used for pseudo values
	possiblePseudoValues:any	//the possible pseudo values to choose from randomly
	currentPseudoCount=0		//the counter used when pseudo must count upwards
	dataType=''					//the data type this placeholder will be on the backend. text,decimal,integer...
}

export function dataPlacerHolderPseudoRandom(dataType:string,possiblePseudoValues:any[])
{
	let dp=new DataPlaceholder()
	dp.pseudoType='RANDOM'
	dp.dataType=dataType
	dp.possiblePseudoValues=possiblePseudoValues
	return dp
}

export function dataPlacerHolderPseudoCounter(dataType:string,start:number)
{
	let dp=new DataPlaceholder()
	dp.pseudoType='COUNT'
	dp.dataType=dataType
	dp.currentPseudoCount=start
	return dp
}

export function dataPlacerHolderGetPseudo(data:DataPlaceholder)
{
	switch(data.pseudoType)
	{
		case 'RANDOM':	return randomChoice(data.possiblePseudoValues)

		case 'COUNT':	
			data.currentPseudoCount++
			return data.currentPseudoCount
	}
}