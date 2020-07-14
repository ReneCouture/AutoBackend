import { randomInt } from "./randomInt";

/*
	returns a random choice from the array
*/
export function randomChoice(choices:any) 
{
  return choices[randomInt(choices.length)]
}