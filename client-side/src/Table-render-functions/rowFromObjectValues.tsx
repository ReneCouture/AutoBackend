import React from "react"

/*
    returns all the object values as a row in a table
*/
export function rowFromObjectValues(obj:any)
{
    let jsx=(<></>)

    for(let property in obj)
    {
        //console.log(`getDisplayTextRow() property=${property}`)
        jsx=(<>{jsx}<td>{obj[property]}</td></>)
    }

    return (<tr>{jsx}</tr>)
}