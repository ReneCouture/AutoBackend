import React from "react";
import { Table } from "reactstrap";
import { rowFromObject } from "./rowFromObject";

/*
	returns jsx that is a table of the array of objs.
	each object is a row in the table
*/
export function tableFromObjects(arrayOfObjs:any)
{
	if(!arrayOfObjs) return(<>Array of objects is undefined or null</>)

	if(arrayOfObjs.length==0)return(<>No objects to display</>)

	return(<>
		<Table>
			<body>
				{
					arrayOfObjs.map((obj:any,i:number)=>{
						return(<tr>
								<td>
									{i}
								</td>
								<td>
									{JSON.stringify(obj)}
								</td>
							</tr>)
					})
				}
			</body>
		</Table>
	</>)
}