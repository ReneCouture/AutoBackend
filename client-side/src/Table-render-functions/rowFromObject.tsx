import React from "react";

/*
	returns the obj as a row in a table.
*/
export function rowFromObject(obj:any)
{
	return(<tr>
		<td>
			{JSON.stringify(obj)}
		</td>
	</tr>)
}