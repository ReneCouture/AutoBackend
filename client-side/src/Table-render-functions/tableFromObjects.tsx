import React from "react";
import { Table } from "reactstrap";
import { rowFromObjectProps } from "./rowFromObjectProps";
import { rowFromObjectValues } from "./rowFromObjectValues";

/*
	returns jsx that is a table of the array of objs.
	object keys become columns
	objects become rows
*/
export function tableFromObjects(arrayOfObjs:any)
{
	if(!arrayOfObjs) return(<>Array of objects is undefined or null</>)

	if(arrayOfObjs.length==0)return(<>No objects to display</>)

	return(<>
		<Table>
			<body>
				{rowFromObjectProps(arrayOfObjs[0])}
				{
					arrayOfObjs.map((obj:any)=>{
						return rowFromObjectValues(obj)
					})
				}
			</body>
		</Table>
	</>)
}