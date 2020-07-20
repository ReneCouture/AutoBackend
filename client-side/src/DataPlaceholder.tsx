import { randomChoice } from "./Other/randomChoice"
import { type } from "os"
import { log } from "./Other/log"

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

//returns the next value within possiblePseudoValues. wraps around to 0 when the end of the array is reached
export function dataPlacerHolderPseudoIterate(dataType:string,possiblePseudoValues:any[])
{
	let dp=new DataPlaceholder()
	dp.pseudoType='ITERATE'
	dp.dataType=dataType
	dp.possiblePseudoValues=possiblePseudoValues
	return dp
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

/*
	Returns a pseudo value depending on the data placeholder. 
	This is called many times to get different values.
*/
export function dataPlacerHolderGetPseudo(data:DataPlaceholder)
{
	let value
	
	switch(data.pseudoType)
	{
		case 'ITERATE':
			value=data.possiblePseudoValues[data.currentPseudoCount]
			data.currentPseudoCount=(data.currentPseudoCount+1)%data.possiblePseudoValues.length
			return value

		case 'RANDOM':
			return randomChoice(data.possiblePseudoValues)

		case 'COUNT':	
			value=data.currentPseudoCount
			data.currentPseudoCount++
			return value
	}
}