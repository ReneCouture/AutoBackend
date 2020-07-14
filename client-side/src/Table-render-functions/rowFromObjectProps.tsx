import React from "react"

/*
    returns all the users properties as a row in a table
*/
export function rowFromObjectProps(obj:any)
{
    let jsx=(<></>)

    for(let property in obj)
    {
        //console.log(`getDisplayTextRow() property=${property}`)
        jsx=(<>{jsx}<td><b>{property}</b></td></>)
    }

    return (<tr>{jsx}</tr>)
}