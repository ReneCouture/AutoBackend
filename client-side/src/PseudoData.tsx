import { randomChoice } from "./Helpers/randomChoice"


export class PseudoData
{
	possibleValues:any

	constructor(possibleValues:any[])
	{
		this.possibleValues=possibleValues
	}
}

export function pseudoValues(...args:any):PseudoData
{
	return new PseudoData([...args])
}

export function pseudoGimme(pseudo:PseudoData)
{
	return randomChoice(pseudo.possibleValues)
}