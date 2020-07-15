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
}

export function dataPlacerHolderPseudoRandom(possiblePseudoValues:any[])
{
	let thing=new DataPlaceholder()
	thing.pseudoType='RANDOM'
	thing.possiblePseudoValues=possiblePseudoValues
	return thing
}

export function dataPlacerHolderPseudoCounter(start:number)
{
	let thing=new DataPlaceholder()
	thing.pseudoType='COUNT'
	thing.currentPseudoCount=start
	return thing
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